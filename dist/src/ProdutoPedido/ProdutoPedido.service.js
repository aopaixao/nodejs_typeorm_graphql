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
exports.ProdutoPedidoService = void 0;
const common_1 = require("@nestjs/common");
const ProdutoPedido_model_1 = require("./ProdutoPedido.model");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProdutoPedidoService = class ProdutoPedidoService {
    constructor(produtoPedidoRepository) {
        this.produtoPedidoRepository = produtoPedidoRepository;
    }
    create(details) {
        return this.produtoPedidoRepository.save(details);
    }
    findAll() {
        return this.produtoPedidoRepository.find();
    }
    findOne(id) {
        return this.produtoPedidoRepository.findOne(id);
    }
    findByProduto(id) {
        return this.produtoPedidoRepository.createQueryBuilder("produto_pedido")
            .where("produto_pedido.produto_id = :id", { id })
            .getMany();
    }
};
ProdutoPedidoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(ProdutoPedido_model_1.ProdutoPedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutoPedidoService);
exports.ProdutoPedidoService = ProdutoPedidoService;
//# sourceMappingURL=ProdutoPedido.service.js.map