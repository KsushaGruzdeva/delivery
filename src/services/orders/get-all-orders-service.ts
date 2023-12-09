import { PostgresSource } from "../../db/source";
import { Order } from "../../models/order";
import { User, UserRole } from "../../models/user";

export class GetAllOrdersService {
  public async execute(issuerId: number | undefined): Promise<{orders: Order[], ok: boolean, message?: string}> {
    const issuer = await PostgresSource.getRepository(User).findOneBy({id: issuerId || -1});

    const query = PostgresSource.getRepository(Order).createQueryBuilder("order")
      .leftJoinAndSelect("order.client", "user")
      .leftJoinAndSelect("order.cart", "item");

    if(!issuer) {
      return {
        message: "У вас нет доступа",
        orders: [],
        ok: false
      };
    }

    if(issuer.role === UserRole.CLIENT) {
      query.where("order.client.id = :id", {id: issuer.id});

      // filters = {
      //   client: {
      //     id: issuer.id
      //   }
      // };
    } else if(issuer.role === UserRole.COURIER) {
      query.where("order.assignedCourier IS NOT NULL AND order.assignedCourier.id = ?", [issuer.id]);

      // filters = {
      //   assignedCourier: And(Not(IsNull()), {

      //   })
      // };
    } else if(issuer.role === UserRole.STOREKEEPER) {
      query.where("order.cardFilled = false");

      // filters = {
      //   cardFilled: false
      // };
    }

    const orders = await query.getMany();

    console.log(orders);

    return {
      orders,
      ok: true,
    };
  }
}
