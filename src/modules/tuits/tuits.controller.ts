import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuits.entity';
import { CreateTuitDto, PaginationQueryDto, UpdateTuitDto } from './dto';

//^ Estos decoradores se pueden usar porque en el tsconfig.json esta  "experimentalDecorators": true
//^ Enruta las peticiones q lleguen atravez de http al recurso tuits
@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits(@Query() pagination: PaginationQueryDto): Promise<Tuit[]> {
    return this.tuitService.getTuits(pagination); //^ en el main.ts tenes q poner el pipe transformOprions
  }

  @Get(':id')
  getTuit(@Param('id') id: number): Promise<Tuit> {
    return this.tuitService.getTuit(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  //^ ojo para q se castee el objeto CreateTuitDto hay q ir a main.ts y agregar un pipe -> app.useGlobalPipes(new ValidationPipe({ transform: true }));
  createTuit(@Body() createTuitDto: CreateTuitDto): Promise<Tuit> {
    //^ con el transform true en el pipe del main.ts , lo convierte el body en el objeto CreateTuitDto

    console.log('Es CreateTuitDto', createTuitDto instanceof CreateTuitDto);

    return this.tuitService.createTuit(createTuitDto);
  }

  @Patch(':id')
  updateTuit(
    @Param('id') id: number,
    @Body() updateTuitDto: UpdateTuitDto,
  ): Promise<Tuit> {
    return this.tuitService.updateTuit(id, updateTuitDto);
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: number): Promise<void> {
    return this.tuitService.removeTuit(id);
  }

  //^ SON SIN USAR EL SERVICE

  //   //^ private: nos asegura q el servicio se consumido dentro de la clase
  //   //^ readonly: no es necesario, pero es una buana practica, asi nos aseguramos q el contenido de la dependemcia no va a ser reemplazado
  //   constructor(private readonly tuitService: TuitsService) {}

  //   //^ Al agregar el decorador Get() ya lo expone para poder usarlo
  //   @Get()
  //   getTuits(@Query() filterQuery): string {
  //     const { searchTerm, orderBy } = filterQuery;

  //     return `All ${searchTerm} tuits order by ${orderBy}`;
  //   }

  //   //^ https://www.youtube.com/watch?v=yP4cXpmjT3U&list=PLzHaXzj_WAym4WR3gBYuy1iew5T3NgL0v&index=21
  //   @Get(':id') //^ /tuits/1
  //   //^ En lugar de hacer esto getTuit(@Param() params) { return `Ỳou tuit id is ${params.id}`; }  se hace asi:
  //   getTuit(@Param('id') id: string): string {
  //     return `Ỳou tuit id is ${id}`;
  //   }

  //   @Post()
  //   @HttpCode(HttpStatus.NO_CONTENT) //^ Nest responde bien los codigos de estado si es un get 200 o post 201, pero se puede cambiar segun la funcionalidad
  //   createTuit(@Body('message') message: string): string {
  //     return `Your tuit was ${message}`;
  //   }

  //   @Patch(':id')
  //   updateTuit(@Param('id') id: string, @Body('tuit') tuit: string): string {
  //     return `The tuit ${id} has been updated ${tuit} `;
  //   }

  //   @Delete(':id')
  //   deleteTuit(@Param('id') id: string): string {
  //     return `The tuit ${id} has been deleted `;
  //   }
}
