import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Index("endereco_pkey", ["enderecoId"], { unique: true })
@Entity("endereco", { schema: "public" })
export class Endereco {
  @Field()
  @PrimaryGeneratedColumn({ type: "integer", name: "endereco_id" })
  enderecoId: number;

  @Field()
  @Column("character varying", { name: "cep", nullable: true, length: 9 })
  cep: string | null;

  @Field()
  @Column("character varying", { name: "rua", nullable: true, length: 100 })
  rua: string | null;

  @Field()
  @Column("character varying", { name: "bairro", nullable: true, length: 30 })
  bairro: string | null;

  @Field()
  @Column("character varying", { name: "cidade", nullable: true, length: 30 })
  cidade: string | null;

  @Field()
  @Column("character varying", { name: "numero", nullable: true, length: 10 })
  numero: string | null;

  @Field()
  @Column("character varying", {
    name: "complemento",
    nullable: true,
    length: 100,
  })
  complemento: string | null;

  @Field()
  @Column("character varying", { name: "uf", nullable: true, length: 2 })
  uf: string | null;
}
