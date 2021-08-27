export interface produto {
    produto_id: number;
    nome_produto: string | null;
    descricao_produto: string | null;
    preco_produto: number | null;
    qtd_estoque: number | null;
    data_cadastro_produto: Date | null;
    categoria_id: number;
    imagem: string | null;
}
export interface cliente {
    cliente_id: number;
    email: string | null;
    username: string | null;
    senha: string | null;
    nome: string | null;
    cpf: string;
    telefone: string | null;
    data_nascimento: Date | null;
    endereco_id: number;
}
export interface produto_pedido {
    produto_pedido_id: number;
    qtd_produto_pedido: number | null;
    preco_produto_pedido: number | null;
    produto_id: number | null;
    pedido_id: number | null;
}
export interface pedido {
    pedido_id: number;
    numero_pedido: number | null;
    valor_total_pedido: number | null;
    data_pedido: Date;
    status: boolean | null;
    cliente_id: number;
}
export interface endereco {
    endereco_id: number;
    cep: string | null;
    rua: string | null;
    bairro: string | null;
    cidade: string | null;
    numero: string | null;
    complemento: string | null;
    uf: string | null;
}
export interface categoria {
    categoria_id: number;
    nome_categoria: string | null;
    descricao_categoria: string | null;
}
