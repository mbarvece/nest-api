import { Controller, Get, Param } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
  @Get(':id')
  getTuit(@Param('id') id: string): string {
    return `Ỳou tuit id is ${id} - prueba 16`;
  }
}
