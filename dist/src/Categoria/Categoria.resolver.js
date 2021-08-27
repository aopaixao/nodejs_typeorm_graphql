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
exports.CategoriaResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const Categoria_model_1 = require("./Categoria.model");
const Categoria_service_1 = require("./Categoria.service");
let CategoriaResolver = class CategoriaResolver {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }
    async categoria(id) {
        return await this.categoriaService.findOne(id);
    }
    async categorias() {
        return await this.categoriaService.findAll();
    }
};
__decorate([
    graphql_1.Query(returns => Categoria_model_1.Categoria),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaResolver.prototype, "categoria", null);
__decorate([
    graphql_1.Query(returns => [Categoria_model_1.Categoria]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaResolver.prototype, "categorias", null);
CategoriaResolver = __decorate([
    graphql_1.Resolver(of => Categoria_model_1.Categoria),
    __param(0, common_1.Inject(Categoria_service_1.CategoriaService)),
    __metadata("design:paramtypes", [Categoria_service_1.CategoriaService])
], CategoriaResolver);
exports.CategoriaResolver = CategoriaResolver;
//# sourceMappingURL=Categoria.resolver.js.map