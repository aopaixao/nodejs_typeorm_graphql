import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';
import { Pedido } from "../Pedido/Pedido.model";

@ObjectType()
@Index("cliente_pkey", ["clienteId"], { unique: true })
@Index("cliente_cpf_key", ["cpf"], { unique: true })
@Entity("cliente", { schema: "public" })
export class Cliente {
  @Field()
  @PrimaryGeneratedColumn({ type: "integer", name: "cliente_id" })
  clienteId: number;

  @Field()
  @Column("character varying", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Field()
  @Column("character varying", { name: "username", nullable: true, length: 15 })
  username: string | null;

  @Field()
  @Column("character varying", { name: "senha", nullable: true, length: 20 })
  senha: string | null;

  @Field()
  @Column("character varying", { name: "nome", nullable: true, length: 200 })
  nome: string | null;

  @Field()
  @Column("character varying", { name: "cpf", unique: true, length: 11 })
  cpf: string;

  @Field()
  @Column("character varying", { name: "telefone", nullable: true, length: 11 })
  telefone: string | null;

  @Field()
  @Column("date", { name: "data_nascimento", nullable: true })
  dataNascimento: string | null;

  @Field()
  @Column("integer", { name: "endereco_id" })
  enderecoId: number;
/*
  @Field(type => [Pedido], { nullable: true })
  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[];
*/  
}
