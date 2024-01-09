import {
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    registerDecorator,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'emailUnico', async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    async validate(value: any): Promise<boolean> {
        const usuarioComEmailExiste =
            await this.usuarioRepository.existeComEmail(value);

        return !usuarioComEmailExiste;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: any, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator,
        });
    };
};
