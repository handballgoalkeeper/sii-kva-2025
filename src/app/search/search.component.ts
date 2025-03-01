import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {FlightModel} from '../../models/flight.model';
import {DatePipe, NgIf} from '@angular/common';
import {FlightService} from '../../services/flight.service';
import {MatButton} from '@angular/material/button';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, DatePipe, MatButton, LoadingComponent],
  templateUrl: './search.component.html',
  standalone: true,
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
  dataSource: FlightModel[] | null = null;

  public constructor() {
    FlightService.findAll(0, 8).then(response => this.dataSource = response.data.content);
  }
}
