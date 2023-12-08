import { Router } from "express";

export const homeRouter = Router();

homeRouter.get("/", (_, res) => {
  return res.render("home");
});
