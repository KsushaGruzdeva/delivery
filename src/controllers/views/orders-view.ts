import { Router } from "express";

import { PostgresSource } from "../../db/source";
import { addTokenData } from "../../middlewares/add-token-data";
import { Item } from "../../models/item";
import { GetAllOrdersService } from "../../services/orders/get-all-orders-service";

export const orderRouter = Router();

orderRouter.get("/orders", addTokenData, async (req, res) => {
  const response = await new GetAllOrdersService().execute(req.tokenData?.id);

  return res.render("orders/all-orders", {
    tokenData: req.tokenData,
    orders: response.orders
  });
});

orderRouter.get("/out/create_order", addTokenData, async (req, res) => {
  const items = await PostgresSource.getRepository(Item).find();

  return res.render("out/create-order", {
    tokenData: req.tokenData,
    message: null,
    items
  });
});
