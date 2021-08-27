import { Categoria } from "../Categoria/Categoria";
import { ProdutoPedido } from "../ProdutoPedido/ProdutoPedido";
export declare class Produto {
    produtoId: number;
    nomeProduto: string | null;
    descricaoProduto: string | null;
    precoProduto: string | null;
    qtdEstoque: number | null;
    dataCadastroProduto: string | null;
    imagem: string | null;
    categoria: Categoria;
    produtoPedidos: ProdutoPedido[];
}
