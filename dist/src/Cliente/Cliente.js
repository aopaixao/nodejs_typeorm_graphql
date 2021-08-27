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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const Pedido_model_1 = require("../Pedido/Pedido.model");
let Cliente = class Cliente {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "cliente_id" }),
    __metadata("design:type", Number)
], Cliente.prototype, "clienteId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "email", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "username", nullable: true, length: 15 }),
    __metadata("design:type", String)
], Cliente.prototype, "username", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "senha", nullable: true, length: 20 }),
    __metadata("design:type", String)
], Cliente.prototype, "senha", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "nome", nullable: true, length: 200 }),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "cpf", unique: true, length: 11 }),
    __metadata("design:type", String)
], Cliente.prototype, "cpf", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "telefone", nullable: true, length: 11 }),
    __metadata("design:type", String)
], Cliente.prototype, "telefone", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("date", { name: "data_nascimento", nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "dataNascimento", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("integer", { name: "endereco_id" }),
    __metadata("design:type", Number)
], Cliente.prototype, "enderecoId", void 0);
__decorate([
    graphql_1.Field(type => [Pedido_model_1.Pedido], { nullable: true }),
    typeorm_1.OneToMany(() => Pedido_model_1.Pedido, (pedido) => pedido.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "pedidos", void 0);
Cliente = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Index("cliente_pkey", ["clienteId"], { unique: true }),
    typeorm_1.Index("cliente_cpf_key", ["cpf"], { unique: true }),
    typeorm_1.Entity("cliente", { schema: "public" })
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map