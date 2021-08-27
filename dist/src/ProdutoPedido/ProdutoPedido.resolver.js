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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPedidoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const ProdutoPedido_model_1 = require("./ProdutoPedido.model");
const ProdutoPedido_service_1 = require("./ProdutoPedido.service");
let ProdutoPedidoResolver = class ProdutoPedidoResolver {
    constructor(produtoPedidoService) {
        this.produtoPedidoService = produtoPedidoService;
    }
    async produtoPedido(id) {
        return await this.produtoPedidoService.findOne(id);
    }
    async produtoPedidos() {
        return await this.produtoPedidoService.findAll();
    }
};
__decorate([
    graphql_1.Query(returns => ProdutoPedido_model_1.ProdutoPedido),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoPedidoResolver.prototype, "produtoPedido", null);
__decorate([
    graphql_1.Query(returns => [ProdutoPedido_model_1.ProdutoPedido]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoPedidoResolver.prototype, "produtoPedidos", null);
ProdutoPedidoResolver = __decorate([
    graphql_1.Resolver(of => ProdutoPedido_model_1.ProdutoPedido),
    __param(0, common_1.Inject(ProdutoPedido_service_1.ProdutoPedidoService)),
    __metadata("design:paramtypes", [ProdutoPedido_service_1.ProdutoPedidoService])
], ProdutoPedidoResolver);
exports.ProdutoPedidoResolver = ProdutoPedidoResolver;
//# sourceMappingURL=ProdutoPedido.resolver.js.map