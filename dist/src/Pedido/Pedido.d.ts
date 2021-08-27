import { Cliente } from "../Cliente/Cliente";
import { ProdutoPedido } from "../ProdutoPedido/ProdutoPedido.model";
export declare class Pedido {
    pedidoId: number;
    numeroPedido: number | null;
    valorTotalPedido: string | null;
    dataPedido: string;
    status: boolean | null;
    cliente: Cliente;
    produtoPedidos: ProdutoPedido[];
}
