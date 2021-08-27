import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { Pedido } from "../Pedido/Pedido.model";
import { Produto } from "../Produto/Produto.model";



@ObjectType()
@Index("produto_pedido_pkey", ["produtoPedidoId"], { unique: true })
@Entity("produto_pedido", { schema: "public" })
export class ProdutoPedido {
  @Field()
  @PrimaryGeneratedColumn({ type: "integer", name: "produto_pedido_id" })
  produtoPedidoId: number;

  @Field()
  @Column("integer", { name: "qtd_produto_pedido", nullable: true })
  qtdProdutoPedido: number | null;

  @Field()
  @Column("numeric", { name: "preco_produto_pedido", nullable: true })
  precoProdutoPedido: string | null;
/*
  @Field()
  @ManyToOne(() => Pedido, (pedido) => pedido.produtoPedidos)
  @JoinColumn([{ name: "pedido_id", referencedColumnName: "pedidoId" }])
  pedido: Pedido;
*/
  //@ManyToOne(() => Produto, (produto) => produto.produtoPedidos)
  @Field(type => Produto)
  @ManyToOne(type => Produto, produto => produto.produtoPedidos)
  @JoinColumn([{ name: "produto_id", referencedColumnName: "produtoId" }])
  produto: Produto;
}
