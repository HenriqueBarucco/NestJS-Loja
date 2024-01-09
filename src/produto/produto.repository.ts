import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './produto.entity';

@Injectable()
export class ProdutoRepository {
    private produtos: ProdutoEntity[] = [];

    async salvar(produto: ProdutoEntity) {
        this.produtos.push(produto);
    }

    async listar() {
        return this.produtos;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<ProdutoEntity>) {
        const produto = this.buscaPorId(id);

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave == 'id') return;
            produto[chave] = valor;
        });

        return produto;
    }

    async remove(id: string) {
        const produto = this.buscaPorId(id);

        this.produtos.splice(this.produtos.indexOf(produto), 1);
    }

    private buscaPorId(id: string) {
        const possivelProduto = this.produtos.find(
            (produtoSalvo) => produtoSalvo.id === id,
        );

        if (!possivelProduto) {
            throw new Error('Produto não encontrado');
        }

        return possivelProduto;
    }
}
