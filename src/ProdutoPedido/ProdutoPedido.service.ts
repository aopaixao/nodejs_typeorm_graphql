import { Injectable } from '@nestjs/common';
import { ProdutoPedido } from './ProdutoPedido.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoPedidoService {
    constructor(
        @InjectRepository(ProdutoPedido)
        private produtoPedidoRepository: Repository<ProdutoPedido>,
      ) {}

      create(details: ProdutoPedido): Promise<ProdutoPedido>{
          return this.produtoPedidoRepository.save(details);
      }
    
      findAll(): Promise<ProdutoPedido[]> {
        return this.produtoPedidoRepository.find();
      }
    
      findOne(id: string): Promise<ProdutoPedido> {
        return this.produtoPedidoRepository.findOne(id);
      }

      findByProduto(id: number): Promise<ProdutoPedido[]>{
        return this.produtoPedidoRepository.createQueryBuilder("produto_pedido")
        .where("produto_pedido.produto_id = :id", { id })
        .getMany();
      }
}