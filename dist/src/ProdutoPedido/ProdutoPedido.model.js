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
exports.ProdutoPedido = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const Produto_model_1 = require("../Produto/Produto.model");
let ProdutoPedido = class ProdutoPedido {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "produto_pedido_id" }),
    __metadata("design:type", Number)
], ProdutoPedido.prototype, "produtoPedidoId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("integer", { name: "qtd_produto_pedido", nullable: true }),
    __metadata("design:type", Number)
], ProdutoPedido.prototype, "qtdProdutoPedido", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("numeric", { name: "preco_produto_pedido", nullable: true }),
    __metadata("design:type", String)
], ProdutoPedido.prototype, "precoProdutoPedido", void 0);
__decorate([
    graphql_1.Field(type => Produto_model_1.Produto),
    typeorm_1.ManyToOne(type => Produto_model_1.Produto, produto => produto.produtoPedidos),
    typeorm_1.JoinColumn([{ name: "produto_id", referencedColumnName: "produtoId" }]),
    __metadata("design:type", Produto_model_1.Produto)
], ProdutoPedido.prototype, "produto", void 0);
ProdutoPedido = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Index("produto_pedido_pkey", ["produtoPedidoId"], { unique: true }),
    typeorm_1.Entity("produto_pedido", { schema: "public" })
], ProdutoPedido);
exports.ProdutoPedido = ProdutoPedido;
//# sourceMappingURL=ProdutoPedido.model.js.map