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
exports.Pedido = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let Pedido = class Pedido {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "pedido_id" }),
    __metadata("design:type", Number)
], Pedido.prototype, "pedidoId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("integer", { name: "numero_pedido", nullable: true }),
    __metadata("design:type", Number)
], Pedido.prototype, "numeroPedido", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("numeric", { name: "valor_total_pedido", nullable: true }),
    __metadata("design:type", String)
], Pedido.prototype, "valorTotalPedido", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("date", { name: "data_pedido", default: () => "now()" }),
    __metadata("design:type", String)
], Pedido.prototype, "dataPedido", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("boolean", { name: "status", nullable: true }),
    __metadata("design:type", Boolean)
], Pedido.prototype, "status", void 0);
Pedido = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Index("pedido_pkey", ["pedidoId"], { unique: true }),
    typeorm_1.Entity("pedido", { schema: "public" })
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=Pedido.model.js.map