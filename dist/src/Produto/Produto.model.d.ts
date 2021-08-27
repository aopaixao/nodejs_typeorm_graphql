import { Categoria } from "../Categoria/Categoria.model";
import { ProdutoPedido } from "../ProdutoPedido/ProdutoPedido.model";
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
