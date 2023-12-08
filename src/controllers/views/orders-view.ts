import { Router } from "express";

import { addTokenData } from "../../middlewares/add-token-data";

export const orderRouter = Router();

orderRouter.get("/orders", addTokenData, (req, res) => {
  return res.render("orders/index", {
    tokenData: req.tokenData
  });
});
