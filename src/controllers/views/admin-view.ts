import { Router } from "express";

import { isAuthorized } from "../../middlewares/is-authorized";
import { UserRole } from "../../models/user";

export const adminRouter = Router();

adminRouter.get("/admin/users", isAuthorized, (req, res) => {
  // Если доступа нет, переправить на главную
  // return res.redirect("/");

  if(req.tokenData!.role <= UserRole.COURIER) {
    return res.render("errors/forbidden");
  }

  return res.render("admin/users", {
    users: [
      {id: 1, name: "Vlad", email: "example@gmail.com", role: "ADMIN"},
      {id: 2, name: "Nikita Hui", email: "some-email@gmail.com", role: "USER"}
    ]
  });
});
