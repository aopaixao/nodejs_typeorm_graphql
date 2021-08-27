import { Categoria } from './Categoria.model';
import { Repository } from 'typeorm';
export declare class CategoriaService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    create(details: Categoria): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findOne(id: string): Promise<Categoria>;
}
