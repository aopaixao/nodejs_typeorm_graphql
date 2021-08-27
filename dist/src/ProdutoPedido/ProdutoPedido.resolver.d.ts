import { ProdutoPedido } from './ProdutoPedido.model';
import { ProdutoPedidoService } from './ProdutoPedido.service';
export declare class ProdutoPedidoResolver {
    private produtoPedidoService;
    constructor(produtoPedidoService: ProdutoPedidoService);
    produtoPedido(id: string): Promise<ProdutoPedido>;
    produtoPedidos(): Promise<ProdutoPedido[]>;
}
