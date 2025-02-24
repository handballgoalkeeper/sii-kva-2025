import { Component } from '@angular/core';
import {FlightService} from '../../services/flight.service';
import {JsonPipe, NgIf} from '@angular/common';
import {AxiosError} from 'axios';

@Component({
  selector: 'app-home',
  imports: [JsonPipe, NgIf],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public flights: any[] | null = null;
  public error: string | null = null;

  constructor() {
    FlightService.findAll().then((response) => {
      this.flights = response.data;
    }).catch((error: AxiosError) => this.error = `${error.code}: ${error.message}`);
  }
}
