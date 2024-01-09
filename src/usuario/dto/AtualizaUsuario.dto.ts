import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class AtualizaUsuarioDTO {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    @IsOptional()
    nome: string;

    @IsEmail({}, { message: 'E-mail inválido' })
    @EmailUnico({ message: 'E-mail já cadastrado' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
    @IsOptional()
    senha: string;
}
