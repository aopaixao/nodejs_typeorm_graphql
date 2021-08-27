import { Injectable } from '@nestjs/common';
import { Categoria } from './Categoria.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
      ) {}

      create(details: Categoria): Promise<Categoria>{
          return this.categoriaRepository.save(details);
      }
    
      findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.find();
      }
    
      findOne(id: string): Promise<Categoria> {
        return this.categoriaRepository.findOne(id);
      }
}