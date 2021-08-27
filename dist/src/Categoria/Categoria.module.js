"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaModule = void 0;
const Produto_module_1 = require("../Produto/Produto.module");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const Categoria_service_1 = require("./Categoria.service");
const Categoria_resolver_1 = require("./Categoria.resolver");
const Categoria_model_1 = require("./Categoria.model");
let CategoriaModule = class CategoriaModule {
};
CategoriaModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([Categoria_model_1.Categoria]), common_1.forwardRef(() => Produto_module_1.ProdutoModule)],
        providers: [Categoria_service_1.CategoriaService, Categoria_resolver_1.CategoriaResolver],
        exports: [Categoria_service_1.CategoriaService]
    })
], CategoriaModule);
exports.CategoriaModule = CategoriaModule;
//# sourceMappingURL=Categoria.module.js.map