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
exports.Endereco = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let Endereco = class Endereco {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn({ type: "integer", name: "endereco_id" }),
    __metadata("design:type", Number)
], Endereco.prototype, "enderecoId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "cep", nullable: true, length: 9 }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "rua", nullable: true, length: 100 }),
    __metadata("design:type", String)
], Endereco.prototype, "rua", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "bairro", nullable: true, length: 30 }),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "cidade", nullable: true, length: 30 }),
    __metadata("design:type", String)
], Endereco.prototype, "cidade", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "numero", nullable: true, length: 10 }),
    __metadata("design:type", String)
], Endereco.prototype, "numero", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", {
        name: "complemento",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Endereco.prototype, "complemento", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column("character varying", { name: "uf", nullable: true, length: 2 }),
    __metadata("design:type", String)
], Endereco.prototype, "uf", void 0);
Endereco = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Index("endereco_pkey", ["enderecoId"], { unique: true }),
    typeorm_1.Entity("endereco", { schema: "public" })
], Endereco);
exports.Endereco = Endereco;
//# sourceMappingURL=Endereco.js.map