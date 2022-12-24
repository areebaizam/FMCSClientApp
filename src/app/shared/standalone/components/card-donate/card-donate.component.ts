import { Component, Input } from '@angular/core';
//Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FeatureCard } from '@tap/shared/models/common/common.model';
import { CardFeatureComponent } from '../card-feature/card-feature.component';

@Component({
  selector: 'tap-card-donate',
  standalone: true,
  imports: [MatButtonModule, MatIconModule,CardFeatureComponent],
  templateUrl: './card-donate.component.html',
  styleUrls: ['./card-donate.component.scss']
})
export class CardDonateComponent {
  @Input() card: FeatureCard = new FeatureCard();
}
