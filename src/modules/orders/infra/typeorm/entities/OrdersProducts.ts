import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

import Order from '@modules/orders/infra/typeorm/entities/Order';
import Product from '@modules/products/infra/typeorm/entities/Product';
@Entity()
class OrdersProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Order, Order => Order.order_products)
  @JoinColumn({name:'order_id'})
  order: Order;
  @ManyToOne(() => Product, Product => Product.order_products)
  @JoinColumn({name:'product_id'})
  product: Product;
  @Column()
  product_id: string;
  @Column()
  order_id: string;
  @Column('decimal')
  price: number;
  @Column('int')
  quantity: number;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

export default OrdersProducts;
