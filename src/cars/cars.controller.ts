import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsServices: CarsService
  ) {}

  @Get()
  public getAllCars() {
    return this.carsServices.findAll();
  }

  @Get(':id')
  public getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    return this.carsServices.findOneById(id);
  }

  @Post()
  public createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  public updateCar(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any
  ) {
    return body;
  }

  @Delete(':id')
  public deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'DELETE',
      id: id
    };
  }

}
