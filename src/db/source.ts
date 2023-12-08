import "reflect-metadata";

import { DataSource } from "typeorm";
import { POSTGRESQL_DATABASE_URL } from "../constants/env";
import { Item } from "../models/item";
import { Order } from "../models/order";
import { User } from "../models/user";

export const PostgresSource = new DataSource({
  type: "postgres",
  url: POSTGRESQL_DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [User, Order, Item],
  migrations: [],
  subscribers: [],
});
