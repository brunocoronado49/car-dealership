import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
  public getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsServices.findOneById(id);
  }

  @Post()
  public createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }

  @Patch(':id')
  public updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: any
  ) {
    return body;
  }

  @Delete(':id')
  public deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return {
      method: 'DELETE',
      id: id
    };
  }

}
