import { Component } from '@angular/core';
import { PrayerTimeComponent } from '@tap/standalone/components';

@Component({
  selector: 'tap-main',
  standalone: true,
  imports: [PrayerTimeComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
