import { Produto } from "../Produto/Produto.model";
export declare class Categoria {
    categoriaId: number;
    nomeCategoria: string | null;
    descricaoCategoria: string | null;
    produtos: Produto[];
}
