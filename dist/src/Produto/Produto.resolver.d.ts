import { Produto } from './Produto.model';
import { ProdutoService } from './Produto.service';
import { ProdutoPedido } from '../ProdutoPedido/ProdutoPedido.model';
import { ProdutoPedidoService } from '../ProdutoPedido/ProdutoPedido.service';
import { CategoriaService } from '../Categoria/Categoria.service';
export declare class ProdutoResolver {
    private produtoService;
    private produtoPedidoService;
    private categoriaService;
    constructor(produtoService: ProdutoService, produtoPedidoService: ProdutoPedidoService, categoriaService: CategoriaService);
    produto(id: string): Promise<Produto>;
    produtoPedidos(produto: any): Promise<ProdutoPedido[]>;
    produtos(): Promise<Produto[]>;
    produtosByCategoria(categoria: any): Promise<Produto[]>;
}
