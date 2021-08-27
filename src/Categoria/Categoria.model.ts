import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { Produto } from "../Produto/Produto.model";

@ObjectType()
@Index("categoria_pkey", ["categoriaId"], { unique: true })
@Entity("categoria", { schema: "public" })
export class Categoria {
  @Field()
  @PrimaryGeneratedColumn({ type: "integer", name: "categoria_id" })
  categoriaId: number;

  @Field()
  @Column("character varying", {
    name: "nome_categoria",
    nullable: true,
    length: 20,
  })
  nomeCategoria: string | null;

  @Field()
  @Column("character varying", {
    name: "descricao_categoria",
    nullable: true,
    length: 200,
  })
  descricaoCategoria: string | null;

  @Field(type => [Produto], { nullable: true })
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}
