import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Produto } from './Produto.model';
import { ProdutoService } from './Produto.service';
import { ProdutoPedido } from '../ProdutoPedido/ProdutoPedido.model';
import { ProdutoPedidoService } from '../ProdutoPedido/ProdutoPedido.service';
import { Categoria } from '../Categoria/Categoria.model';
import { CategoriaService } from '../Categoria/Categoria.service';

@Resolver(of => Produto)
export class ProdutoResolver {
  constructor(
    @Inject(ProdutoService) private produtoService: ProdutoService,
    @Inject(ProdutoPedidoService) private produtoPedidoService: ProdutoPedidoService,
    @Inject(CategoriaService) private categoriaService: CategoriaService
  ) { }
  @Query(returns => Produto)
  async produto(@Args('id') id: string): Promise<Produto> {
    return await this.produtoService.findOne(id);
  }
  @ResolveField(returns => [ProdutoPedido])
  async produtoPedidos(@Parent() produto) {
    const { id } = produto;
    console.log(produto);
    return this.produtoPedidoService.findByProduto(id);
  }
  @Query(returns => [Produto])
  async produtos(): Promise<Produto[]> {
    return await this.produtoService.findAll();
  }
  @Query(returns => [Produto])
  async produtosByCategoria(@Parent() categoria) {
    const { id } = categoria;
    console.log(categoria);
    return this.produtoService.findByCategoria(id);
  }
}