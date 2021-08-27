import { ProdutoPedido } from './ProdutoPedido.model';
import { Repository } from 'typeorm';
export declare class ProdutoPedidoService {
    private produtoPedidoRepository;
    constructor(produtoPedidoRepository: Repository<ProdutoPedido>);
    create(details: ProdutoPedido): Promise<ProdutoPedido>;
    findAll(): Promise<ProdutoPedido[]>;
    findOne(id: string): Promise<ProdutoPedido>;
    findByProduto(id: number): Promise<ProdutoPedido[]>;
}
