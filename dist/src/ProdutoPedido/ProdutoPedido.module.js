"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ProdutoPedidoModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoPedidoModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const ProdutoPedido_service_1 = require("./ProdutoPedido.service");
const ProdutoPedido_resolver_1 = require("./ProdutoPedido.resolver");
const ProdutoPedido_model_1 = require("./ProdutoPedido.model");
let ProdutoPedidoModule = ProdutoPedidoModule_1 = class ProdutoPedidoModule {
};
ProdutoPedidoModule = ProdutoPedidoModule_1 = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([ProdutoPedido_model_1.ProdutoPedido]), common_1.forwardRef(() => ProdutoPedidoModule_1)],
        providers: [ProdutoPedido_service_1.ProdutoPedidoService, ProdutoPedido_resolver_1.ProdutoPedidoResolver],
        exports: [ProdutoPedido_service_1.ProdutoPedidoService]
    })
], ProdutoPedidoModule);
exports.ProdutoPedidoModule = ProdutoPedidoModule;
//# sourceMappingURL=ProdutoPedido.module.js.map