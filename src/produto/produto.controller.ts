import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { ProdutoEntity } from './produto.entity';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
    constructor(private produtoRepository: ProdutoRepository) {}

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
        const produto = new ProdutoEntity().fromDTO(dadosDoProduto);
        this.produtoRepository.salvar(produto);
        return dadosDoProduto;
    }

    @Get()
    async listProdutos() {
        return this.produtoRepository.listar();
    }

    @Put('/:id')
    async atualizaProduto(
        @Param('id') id: string,
        @Body() novosDados: AtualizaProdutoDTO,
    ) {
        const produtoAtualizado = await this.produtoRepository.atualiza(
            id,
            novosDados,
        );
        return {
            user: produtoAtualizado,
            message: 'Produto atualizado com sucesso',
        };
    }

    @Delete('/:id')
    async removeProduto(@Param('id') id: string) {
        await this.produtoRepository.remove(id);
        return {
            message: 'Produto removido com sucesso',
        };
    }
}
