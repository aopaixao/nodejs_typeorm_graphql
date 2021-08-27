import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { ProdutoPedidoService } from './ProdutoPedido.service';
import { ProdutoPedidoResolver } from './ProdutoPedido.resolver';
import { ProdutoPedido } from './ProdutoPedido.model';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoPedido]), forwardRef(() => ProdutoPedidoModule)],
  providers: [ProdutoPedidoService, ProdutoPedidoResolver],
  exports: [ProdutoPedidoService]
})
export class ProdutoPedidoModule {}