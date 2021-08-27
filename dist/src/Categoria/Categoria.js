"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const Produto_1 = require("../Produto/Produto");
let Categoria = class Categoria {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "categoria_id" }),
    __metadata("design:type", Number)
], Categoria.prototype, "categoriaId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", {
        name: "nome_categoria",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], Categoria.prototype, "nomeCategoria", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", {
        name: "descricao_categoria",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], Categoria.prototype, "descricaoCategoria", void 0);
__decorate([
    graphql_1.Field(type => [Produto_1.Produto], { nullable: true }),
    typeorm_1.OneToMany(() => Produto_1.Produto, (produto) => produto.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "produtos", void 0);
Categoria = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Index("categoria_pkey", ["categoriaId"], { unique: true }),
    typeorm_1.Entity("categoria", { schema: "public" })
], Categoria);
exports.Categoria = Categoria;
//# sourceMappingURL=Categoria.js.map