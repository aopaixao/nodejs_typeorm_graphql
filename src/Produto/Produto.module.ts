import { CategoriaModule } from '../Categoria/Categoria.module';
import { ProdutoPedidoModule } from '../ProdutoPedido/ProdutoPedido.module';
import { Produto } from './Produto.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { ProdutoService } from './Produto.service';
import { ProdutoResolver } from './Produto.resolver';


@Module({
  imports: [
    forwardRef(() => CategoriaModule),  
    forwardRef(() => ProdutoPedidoModule),  
    TypeOrmModule.forFeature([Produto])
  ],
  providers: [ProdutoService, ProdutoResolver],
  exports: [ProdutoService]
})
export class ProdutoModule {}