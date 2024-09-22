import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoriaDespesaService } from './categoria_despesa.service';
import { CategoriaDespesaDTO } from './categoria_despesa.dto';

@Controller('categoria-despesa')
export class CategoriaDespesaController {
  constructor(private readonly categoriaDespesaService: CategoriaDespesaService) {}

  @Post()
  async create(@Body() data: CategoriaDespesaDTO) {
    return this.categoriaDespesaService.create(data)
  }

  @Get()
  async findAll() {
    return this.categoriaDespesaService.findAll()
  }

  @Get(':id_categoria_despesa')
  async find(@Param('id_categoria_despesa', ParseIntPipe) id_categoria_despesa: number) {
    return this.categoriaDespesaService.findDespesasByCategoria(id_categoria_despesa)
  }

  @Put(':id_categoria_despesa')
  async update(@Param('id_categoria_despesa', ParseIntPipe) id_despesa: number, @Body() data: CategoriaDespesaDTO) {
    return this.categoriaDespesaService.update(id_despesa, data)
  }

  @Delete(':id_categoria_despesa')
  async delete(@Param('id_categoria_despesa', ParseIntPipe) id_categoria_despesa: number) {
    return this.categoriaDespesaService.delete(id_categoria_despesa)
  }
}
