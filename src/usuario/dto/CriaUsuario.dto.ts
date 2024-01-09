import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
    @IsNotEmpty({ message: 'Nome é obrigatório' })
    nome: string;

    @IsEmail({}, { message: 'E-mail inválido' })
    email: string;

    @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
    senha: string;
}
