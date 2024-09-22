import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { DespesaDTO } from './despesa.dto';

@Injectable()
export class DespesaService {
    constructor(private prisma: PrismaService) { }

    async create(data: DespesaDTO) {
        const despesa = await this.prisma.despesa.create({
            data,
        })
        return despesa
    }

    async findAll() {
        return this.prisma.despesa.findMany()
    }

    async update(id_despesa: number, data: DespesaDTO) {
        const despesaExists = await this.prisma.despesa.findUnique({
            where: {
                id_despesa,
            },
        });

        if (!despesaExists) {
            throw new Error('Categoria não existe!');
        }

        return await this.prisma.despesa.update({
            data,
            where: {
                id_despesa,
            }

        });
    }

    async delete(id_despesa: number) {
        const despesaExists = await this.prisma.despesa.findUnique({
            where: {
                id_despesa,
            },
        })
        if (!despesaExists) {
            throw new Error('Despesa não existe!')
        }
        return await this.prisma.despesa.delete({
            where: {
                id_despesa,
            },
        })
    }
}
