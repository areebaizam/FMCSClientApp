import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Proviseder
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'tap-ngb-carousel',
  standalone: true,
  imports: [ NgbModule,CommonModule, MatButtonModule ],
  providers: [NgbCarouselConfig],
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.scss']
})
export class NgbCarouselComponent {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    // config.pauseOnHover = true;
  }
}
