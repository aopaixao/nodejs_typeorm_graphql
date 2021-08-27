import { Produto } from './Produto.model';
import { Repository } from 'typeorm';
export declare class ProdutoService {
    private produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    create(details: Produto): Promise<Produto>;
    findAll(): Promise<Produto[]>;
    findOne(id: string): Promise<Produto>;
    findByCategoria(id: number): Promise<Produto[]>;
}
