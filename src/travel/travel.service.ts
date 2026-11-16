import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';

@Injectable()
export class TravelService {
  private trips=[{id:1, name:"To China",price:9000},
    {id:2, name:"To Morocco",price:4000},
  ];
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    const trip = this.trips.find((t) => t.id === id);
    if (!trip) {
      throw new Error(`le voyage est introuvable`);
    }
    return trip;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
