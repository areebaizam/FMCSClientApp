import { Component } from '@angular/core';
//StandAlone Components
import {
  IntroComponent,
  PrayerTimeComponent,
} from '@tap/standalone/components';

@Component({
  selector: 'tap-main',
  standalone: true,
  imports: [IntroComponent, PrayerTimeComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
