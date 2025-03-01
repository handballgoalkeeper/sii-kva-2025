import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import AirlineModel from '../../models/airline.model';
import {AirlineService} from '../../services/airline.service';
import {DatePipe, NgIf} from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  selector: 'app-airline',
  imports: [MatTableModule, DatePipe, MatButtonModule, NgIf, LoadingComponent],
  templateUrl: './airline.component.html',
  standalone: true,
  styleUrl: './airline.component.css'
})
export class AirlineComponent {
  displayedColumns: string[] = ['id', 'name', 'countryOfOrigin', 'website', 'actions'];
  dataSource: AirlineModel[] | null = null;

  constructor() {
    AirlineService.getAirlines().then(response => {
      this.dataSource = response
    })
  }
}
