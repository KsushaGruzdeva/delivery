import { Router } from "express";

import { AUTH_COOKIE_NAME } from "../../constants/auth";

export const authApiRouter = Router();

authApiRouter.post("/api/login", (_, res) => {
  // const {login, password} = req.body;

  // TODO: finish auth process via service
  const token = "";

  res.cookie(AUTH_COOKIE_NAME, token);

  return res.redirect("/");
});
