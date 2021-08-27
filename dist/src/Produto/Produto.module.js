"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoModule = void 0;
const Categoria_module_1 = require("../Categoria/Categoria.module");
const ProdutoPedido_module_1 = require("../ProdutoPedido/ProdutoPedido.module");
const Produto_model_1 = require("./Produto.model");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const Produto_service_1 = require("./Produto.service");
const Produto_resolver_1 = require("./Produto.resolver");
let ProdutoModule = class ProdutoModule {
};
ProdutoModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => Categoria_module_1.CategoriaModule),
            common_1.forwardRef(() => ProdutoPedido_module_1.ProdutoPedidoModule),
            typeorm_1.TypeOrmModule.forFeature([Produto_model_1.Produto])
        ],
        providers: [Produto_service_1.ProdutoService, Produto_resolver_1.ProdutoResolver],
        exports: [Produto_service_1.ProdutoService]
    })
], ProdutoModule);
exports.ProdutoModule = ProdutoModule;
//# sourceMappingURL=Produto.module.js.map