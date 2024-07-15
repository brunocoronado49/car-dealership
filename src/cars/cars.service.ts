import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
      id: uuid(),
      model: 'Corolla',
      brand: 'Toyota'
    },
    {
      id: uuid(),
      model: 'Civic',
      brand: 'Honda'
    },
    {
      id: uuid(),
      model: 'Cherokee',
      brand: 'Jeep'
    }
  ];

  public findAll() {
    return this.cars;
  }

  public findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);

    if(!car)
      throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

}
