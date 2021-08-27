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
exports.ProdutoResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const Produto_model_1 = require("./Produto.model");
const Produto_service_1 = require("./Produto.service");
const ProdutoPedido_model_1 = require("../ProdutoPedido/ProdutoPedido.model");
const ProdutoPedido_service_1 = require("../ProdutoPedido/ProdutoPedido.service");
const Categoria_service_1 = require("../Categoria/Categoria.service");
let ProdutoResolver = class ProdutoResolver {
    constructor(produtoService, produtoPedidoService, categoriaService) {
        this.produtoService = produtoService;
        this.produtoPedidoService = produtoPedidoService;
        this.categoriaService = categoriaService;
    }
    async produto(id) {
        return await this.produtoService.findOne(id);
    }
    async produtoPedidos(produto) {
        const { id } = produto;
        console.log(produto);
        return this.produtoPedidoService.findByProduto(id);
    }
    async produtos() {
        return await this.produtoService.findAll();
    }
    async produtosByCategoria(categoria) {
        const { id } = categoria;
        console.log(categoria);
        return this.produtoService.findByCategoria(id);
    }
};
__decorate([
    graphql_1.Query(returns => Produto_model_1.Produto),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoResolver.prototype, "produto", null);
__decorate([
    graphql_1.ResolveField(returns => [ProdutoPedido_model_1.ProdutoPedido]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoResolver.prototype, "produtoPedidos", null);
__decorate([
    graphql_1.Query(returns => [Produto_model_1.Produto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoResolver.prototype, "produtos", null);
__decorate([
    graphql_1.Query(returns => [Produto_model_1.Produto]),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProdutoResolver.prototype, "produtosByCategoria", null);
ProdutoResolver = __decorate([
    graphql_1.Resolver(of => Produto_model_1.Produto),
    __param(0, common_1.Inject(Produto_service_1.ProdutoService)),
    __param(1, common_1.Inject(ProdutoPedido_service_1.ProdutoPedidoService)),
    __param(2, common_1.Inject(Categoria_service_1.CategoriaService)),
    __metadata("design:paramtypes", [Produto_service_1.ProdutoService,
        ProdutoPedido_service_1.ProdutoPedidoService,
        Categoria_service_1.CategoriaService])
], ProdutoResolver);
exports.ProdutoResolver = ProdutoResolver;
//# sourceMappingURL=Produto.resolver.js.map