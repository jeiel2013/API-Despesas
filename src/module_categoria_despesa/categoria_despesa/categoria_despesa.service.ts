import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CategoriaDespesaDTO } from './categoria_despesa.dto';

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
        const despesas = await this.prisma.despesa.findMany({
            where: {
                id_categoria_despesa: id_categoria_despesa,
            },
        });
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
