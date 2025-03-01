import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-loading',
  imports: [
    MatCardModule,
    NgIf
  ],
  templateUrl: './loading.component.html',
  standalone: true,
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  @Input() isVisible: boolean = false;
}
