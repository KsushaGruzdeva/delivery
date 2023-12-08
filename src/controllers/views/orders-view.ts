import { Router } from "express";

export const orderRouter = Router();

orderRouter.get("/orders", (_, res) => {
  return res.render("orders/index");
});
