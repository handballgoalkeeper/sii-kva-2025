import { Component } from '@angular/core';
import {FlightService} from '../../services/flight.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../../models/flight.model';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgForOf, MatCardModule, MatButtonModule, DatePipe, LoadingComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public flights: FlightModel[] | null = null;
  public error: string | null = null;

  constructor() {
    FlightService.findAll(0, 10).then((response) => {
      this.flights = response.data.content;
    }).catch((error: AxiosError) => this.error = `${error.code}: ${error.message}`);
  }

  public generateDestinationImage(dest: string) {
    return `https://img.pequla.com/destination/${dest.split(' ')[0].toLowerCase()}.jpg`
  }
}
