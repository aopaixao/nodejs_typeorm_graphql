import { ProdutoModule } from '../Produto/Produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { CategoriaService } from './Categoria.service';
import { CategoriaResolver } from './Categoria.resolver';
import { Categoria } from './Categoria.model';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), forwardRef(() => ProdutoModule)],
  providers: [CategoriaService, CategoriaResolver],
  exports: [CategoriaService]
})
export class CategoriaModule {}