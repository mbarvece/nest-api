import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from './tuits.entity';

import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TuitsService {
  //^ con el private, le indicas que va a ser una propiedad solo de esta clase
  constructor(
    @InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>,
  ) {}

  // private tuits: Tuit[] = [
  //   {
  //     id: '1',
  //     message: 'Hello from nest',
  //   },
  // ];

  async getTuits(filterQuery: any): Promise<Tuit[]> {
    const { searchTerm, orderBy } = filterQuery;

    console.log(searchTerm, orderBy);

    return await this.tuitRepository.find();
  }

  async getTuit(id: number): Promise<Tuit> {
    const tuit: Tuit = await this.tuitRepository.findOneBy({ id: id });

    if (!tuit) {
      throw new NotFoundException('Tuit no encontrado');
    }

    return tuit;
  }

  async createTuit(createTuitDto: CreateTuitDto): Promise<Tuit> {
    const tuit: Tuit = new Tuit();
    tuit.message = createTuitDto.message;

    this.tuitRepository.create(tuit);

    return this.tuitRepository.save(tuit);
  }
  // tuit.id = Math.floor(Math.random() * 2000) + 1;
  // tuit.message = createTuitDto.message;

  // this.tuits.push(tuit);

  // return tuit;

  async updateTuit(id: number, updateTuitDto: UpdateTuitDto): Promise<Tuit> {
    //^ el preload hace un merge del objeto que le quiero pasar, lo busca en la base y si existe lo actualiza
    const tuit: Tuit = await this.tuitRepository.preload({
      id,
      message: updateTuitDto.message,
    });

    if (!tuit) {
      throw new NotFoundException('Resource not found !! Tuit no encontrado');
    }

    return this.tuitRepository.save(tuit);
  }

  async removeTuit(id: number): Promise<void> {
    const tuit: Tuit = await this.getTuit(id);

    if (!tuit) {
      throw new NotFoundException('Resource not found !! Tuit no delete');
    }

    this.tuitRepository.remove(tuit);
  }
}
