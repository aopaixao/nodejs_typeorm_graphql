import { Categoria } from './Categoria.model';
import { CategoriaService } from './Categoria.service';
export declare class CategoriaResolver {
    private categoriaService;
    constructor(categoriaService: CategoriaService);
    categoria(id: string): Promise<Categoria>;
    categorias(): Promise<Categoria[]>;
}
