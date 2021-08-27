import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Categoria } from './Categoria.model';
import { CategoriaService } from './Categoria.service';

@Resolver(of => Categoria)
export class CategoriaResolver {
  constructor(
    @Inject(CategoriaService) private categoriaService: CategoriaService,
  ) { }
  @Query(returns => Categoria)
  async categoria(@Args('id') id: string): Promise<Categoria> {
    return await this.categoriaService.findOne(id);
  }
  @Query(returns => [Categoria])
  async categorias(): Promise<Categoria[]> {
    return await this.categoriaService.findAll();
  }
}