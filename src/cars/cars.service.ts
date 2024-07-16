import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   model: 'Corolla',
    //   brand: 'Toyota'
    // },
    // {
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

  public create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto
    }

    this.cars.push(newCar);

    return newCar;
  }

  public update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    if(updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`ID: ${id} is not valid`);

    this.cars = this.cars.map(car => {
      if(car.id === id) {
        car = {
          ...car,
          ...updateCarDto,
          id
        }
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  public delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter(c => c.id !== id);
  }

  public fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
