import { Module } from '@nestjs/common';
import { DespesaModule } from './module_despesa/despesa/despesa.module';
import { CategoriaDespesaModule } from './module_categoria_despesa/categoria_despesa/categoria_despesa.module';

@Module({
  imports: [DespesaModule, CategoriaDespesaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
