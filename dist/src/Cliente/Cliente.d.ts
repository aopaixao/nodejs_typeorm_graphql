import { Pedido } from "../Pedido/Pedido.model";
export declare class Cliente {
    clienteId: number;
    email: string | null;
    username: string | null;
    senha: string | null;
    nome: string | null;
    cpf: string;
    telefone: string | null;
    dataNascimento: string | null;
    enderecoId: number;
    pedidos: Pedido[];
}
