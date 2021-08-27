import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ProdutoPedido } from './ProdutoPedido.model';
import { ProdutoPedidoService } from './ProdutoPedido.service';

@Resolver(of => ProdutoPedido)
export class ProdutoPedidoResolver {
  constructor(
    @Inject(ProdutoPedidoService) private produtoPedidoService: ProdutoPedidoService,
  ) { }
  @Query(returns => ProdutoPedido)
  async produtoPedido(@Args('id') id: string): Promise<ProdutoPedido> {
    return await this.produtoPedidoService.findOne(id);
  }
  @Query(returns => [ProdutoPedido])
  async produtoPedidos(): Promise<ProdutoPedido[]> {
    return await this.produtoPedidoService.findAll();
  }
}