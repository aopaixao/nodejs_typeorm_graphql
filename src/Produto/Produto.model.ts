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
import { Categoria } from "../Categoria/Categoria.model";
import { ProdutoPedido } from "../ProdutoPedido/ProdutoPedido.model";

@ObjectType()
@Index("produto_pkey", ["produtoId"], { unique: true })
@Entity("produto", { schema: "public" })
export class Produto {
  @Field()
  @PrimaryGeneratedColumn({ type: "integer", name: "produto_id" })
  produtoId: number;

  @Field()
  @Column("character varying", {
    name: "nome_produto",
    nullable: true,
    length: 50,
  })
  nomeProduto: string | null;

  @Field()
  @Column("character varying", {
    name: "descricao_produto",
    nullable: true,
    length: 200,
  })
  descricaoProduto: string | null;

  @Field()
  @Column("numeric", { name: "preco_produto", nullable: true })
  precoProduto: string | null;

  @Field()
  @Column("integer", { name: "qtd_estoque", nullable: true })
  qtdEstoque: number | null;

  @Field()
  @Column("date", {
    name: "data_cadastro_produto",
    nullable: true,
    default: () => "now()",
  })
  dataCadastroProduto: string | null;

  @Field()
  @Column("character varying", { name: "imagem", nullable: true })
  imagem: string | null;

  @Field(type => Categoria)
  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  @JoinColumn([{ name: "categoria_id", referencedColumnName: "categoriaId" }])
  categoria: Categoria;

  @Field(type => [ProdutoPedido], { nullable: true })
  //@OneToMany(() => ProdutoPedido, (produtoPedido) => produtoPedido.produto)
  @OneToMany(type => ProdutoPedido, produtoPedido => produtoPedido.produto)
  produtoPedidos: ProdutoPedido[];
}
