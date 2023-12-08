import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Item } from "./item";
import { User } from "./user";

@Entity("order")
export class Order {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({nullable: false})
  public title: string;

  @Column({nullable: false})
  public location: string;

  @ManyToOne(() => User, (user) => user.id, {eager: true})
  public client: User;

  @ManyToMany(() => Item, {eager: true})
  public card!: Item[];

  @Column({nullable: false})
  public status: OrderStatus;

  @Column({nullable: false, default: false})
  public cardFilled: boolean;

  @Column("timestamp", {nullable: false})
  public createdAt: Date;

  @Column("timestamp", {nullable: true})
  public deliveredAt: Date | null;

  public constructor(title: string, location: string, client: User, status?: OrderStatus) {
    this.title = title;
    this.client = client;
    this.location = location;
    this.status = status || OrderStatus.CREATED;
    this.cardFilled = false;
    this.createdAt = new Date();
    this.deliveredAt = null;
  }
}

export enum OrderStatus {
  CREATED,
  PACKED,
  DELIVERY_IN_PROGRESS,
  DELIVERED
}
