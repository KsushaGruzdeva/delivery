import { Handler } from "express";

import { decodeToken, verifyToken } from "../common/jwt";
import { AUTH_COOKIE_NAME } from "../constants/auth";

export const isAuthorized: Handler = (req, res, next) => {
  const token = req.cookies[AUTH_COOKIE_NAME];

  if(!token) {
    return res.redirect("/auth/login");
  }

  if(!verifyToken(token)) {
    return res.redirect("/auth/login");
  }

  req.tokenData = decodeToken(token);

  return next();
};
