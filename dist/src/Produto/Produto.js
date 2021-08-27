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
exports.Produto = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const Categoria_1 = require("../Categoria/Categoria");
const ProdutoPedido_1 = require("../ProdutoPedido/ProdutoPedido");
let Produto = class Produto {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "produto_id" }),
    __metadata("design:type", Number)
], Produto.prototype, "produtoId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", {
        name: "nome_produto",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Produto.prototype, "nomeProduto", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", {
        name: "descricao_produto",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], Produto.prototype, "descricaoProduto", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("numeric", { name: "preco_produto", nullable: true }),
    __metadata("design:type", String)
], Produto.prototype, "precoProduto", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("integer", { name: "qtd_estoque", nullable: true }),
    __metadata("design:type", Number)
], Produto.prototype, "qtdEstoque", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("date", {
        name: "data_cadastro_produto",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", String)
], Produto.prototype, "dataCadastroProduto", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "imagem", nullable: true }),
    __metadata("design:type", String)
], Produto.prototype, "imagem", void 0);
__decorate([
    graphql_1.Field(type => Categoria_1.Categoria),
    typeorm_1.ManyToOne(() => Categoria_1.Categoria, (categoria) => categoria.produtos),
    typeorm_1.JoinColumn([{ name: "categoria_id", referencedColumnName: "categoriaId" }]),
    __metadata("design:type", Categoria_1.Categoria)
], Produto.prototype, "categoria", void 0);
__decorate([
    graphql_1.Field(type => [ProdutoPedido_1.ProdutoPedido], { nullable: true }),
    typeorm_1.OneToMany(() => ProdutoPedido_1.ProdutoPedido, (produtoPedido) => produtoPedido.produto),
    __metadata("design:type", Array)
], Produto.prototype, "produtoPedidos", void 0);
Produto = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Index("produto_pkey", ["produtoId"], { unique: true }),
    typeorm_1.Entity("produto", { schema: "public" })
], Produto);
exports.Produto = Produto;
//# sourceMappingURL=Produto.js.map