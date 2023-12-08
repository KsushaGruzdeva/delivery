import { Router } from "express";

import { CreateUserService } from "../../services/users/create-user-service";

export const authRouter = Router();

authRouter.get("/auth/login", async (_, res) => {
  const response = await new CreateUserService().execute();

  return res.render("auth/login", {
    id: response.id
  });
});
