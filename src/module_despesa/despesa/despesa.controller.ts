import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { DespesaDTO } from './despesa.dto';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly despesaService: DespesaService) {}

  @Post()
  async create(@Body() data: DespesaDTO) {
    return this.despesaService.create(data)
  }

  @Get()
  async findAll() {
    return this.despesaService.findAll()
  }

  @Put(':id_despesa')
  // Estava recebendo o 'id_despesa' do insomnia como string, o ParseIntPipe é para transformá-lo em number
  async update(@Param('id_despesa', ParseIntPipe) id_despesa: number, @Body() data: DespesaDTO) { 
    return this.despesaService.update(id_despesa, data)
  }
 
  @Delete(':id_despesa')
  async delete(@Param('id_despesa', ParseIntPipe) id_despesa: number) {
    return this.despesaService.delete(id_despesa)
  }
}
