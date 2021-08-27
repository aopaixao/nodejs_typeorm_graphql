import { Produto } from "../Produto/Produto";
export declare class Categoria {
    categoriaId: number;
    nomeCategoria: string | null;
    descricaoCategoria: string | null;
    produtos: Produto[];
}
