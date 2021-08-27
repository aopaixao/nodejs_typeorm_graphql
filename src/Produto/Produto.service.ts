import { Injectable } from '@nestjs/common';
import { Produto } from './Produto.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
      ) {}

      create(details: Produto): Promise<Produto>{
          return this.produtoRepository.save(details);
      }
    
      findAll(): Promise<Produto[]> {
        return this.produtoRepository.find();
      }
    
      findOne(id: string): Promise<Produto> {
        return this.produtoRepository.findOne(id);
      }

      findByCategoria(id: number): Promise<Produto[]>{
        return this.produtoRepository.createQueryBuilder("produto")
        .where("produto.categoria_id = :id", { id })
        .getMany();
      }
}