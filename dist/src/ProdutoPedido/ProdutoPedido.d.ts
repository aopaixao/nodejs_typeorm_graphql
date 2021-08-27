import { Pedido } from "../Pedido/Pedido";
import { Produto } from "../Produto/Produto";
export declare class ProdutoPedido {
    produtoPedidoId: number;
    qtdProdutoPedido: number | null;
    precoProdutoPedido: string | null;
    pedido: Pedido;
    produto: Produto;
}
