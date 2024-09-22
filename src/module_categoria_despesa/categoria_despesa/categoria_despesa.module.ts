import { Module } from '@nestjs/common';
import { CategoriaDespesaService } from './categoria_despesa.service';
import { CategoriaDespesaController } from './categoria_despesa.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CategoriaDespesaController],
  providers: [CategoriaDespesaService, PrismaService],
})
export class CategoriaDespesaModule {}
