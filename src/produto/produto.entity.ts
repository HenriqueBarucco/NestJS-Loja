import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { v4 as uuid } from 'uuid';

export class CaracteristicaProduto {
    nome: string;
    descricao: string;
}

export class ImagemProduto {
    url: string;
    descricao: string;
}

export class ProdutoEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    caracteristicas: CaracteristicaProduto[];
    imagens: ImagemProduto[];
    categoria: string;

    fromDTO(dadosDoProduto: CriaProdutoDTO): ProdutoEntity {
        const produto = Object.assign(this, dadosDoProduto);
        produto.id = uuid();

        return produto;
    }
}
