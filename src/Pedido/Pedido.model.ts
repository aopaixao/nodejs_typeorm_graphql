import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { Cliente } from "../Cliente/Cliente.model";
import { ProdutoPedido } from "../ProdutoPedido/ProdutoPedido.model";

@ObjectType()
@Index("pedido_pkey", ["pedidoId"], { unique: true })
@Entity("pedido", { schema: "public" })
export class Pedido {
  @Field()
  @PrimaryGeneratedColumn({ type: "integer", name: "pedido_id" })
  pedidoId: number;

  @Field()
  @Column("integer", { name: "numero_pedido", nullable: true })
  numeroPedido: number | null;

  @Field()
  @Column("numeric", { name: "valor_total_pedido", nullable: true })
  valorTotalPedido: string | null;

  @Field()
  @Column("date", { name: "data_pedido", default: () => "now()" })
  dataPedido: string;

  @Field()
  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;
/*
  @Field(type => Cliente)
  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  @JoinColumn([{ name: "cliente_id", referencedColumnName: "clienteId" }])
  cliente: Cliente;
*/  
/*
  @Field(type => [ProdutoPedido], { nullable: true })
  @OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.pedido)
  produtoPedidos: ProdutoPedido[];
*/  
}
