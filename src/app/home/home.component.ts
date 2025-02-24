import { Component } from '@angular/core';
import {FlightService} from '../../services/flight.service';
import {NgForOf, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../../models/flight.model';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgForOf],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public flights: FlightModel[] | null = null;
  public error: string | null = null;

  constructor() {
    FlightService.findAll().then((response) => {
      this.flights = response.data.content;
    }).catch((error: AxiosError) => this.error = `${error.code}: ${error.message}`);
  }
}
