import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CategoriaDespesaDTO } from './categoria_despesa.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class CategoriaDespesaService {
    constructor(private prisma: PrismaService) {}

    async create(data: CategoriaDespesaDTO) {
        const categoria_despesa = await this.prisma.categoriaDespesa.create({
            data,
        })
        return categoria_despesa
    }

    async findAll() {
        return this.prisma.categoriaDespesa.findMany()
    }

    async findDespesasByCategoria(id_categoria_despesa: number) {
        if (!id_categoria_despesa) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Categoria inválida: o campo id_categoria_despesa é obrigatório',
            }, HttpStatus.BAD_REQUEST);
        }

        const despesas = await this.prisma.despesa.findMany({
            where: {
                id_categoria_despesa: id_categoria_despesa,
            },
        });

        if (despesas.length === 0) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Nenhuma despesa encontrada para esta categoria',
            }, HttpStatus.BAD_REQUEST);
        } 

        return despesas;
    }    

    async update(id_categoria_despesa: number, data: CategoriaDespesaDTO) {
        const categoriaDespesaExists = await this.prisma.categoriaDespesa.findUnique({
            where: {
                id_categoria_despesa,
            },
        });

        if (!categoriaDespesaExists) {
            throw new Error('Esta categoria de despesa não existe!');

        }

        return await this.prisma.categoriaDespesa.update({
            data,
            where: {
                id_categoria_despesa,
            }

        });
    }

    async delete(id_categoria_despesa: number) {
        const categoriaDespesaExists = await this.prisma.categoriaDespesa.findUnique({
            where: {
                id_categoria_despesa,
            },
        })
        if (!categoriaDespesaExists) {
            throw new Error('Esta categoria de despesa não existe!')
        }
        return await this.prisma.categoriaDespesa.delete({
            where: {
                id_categoria_despesa,
            },
        })
    }
}
