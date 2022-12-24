import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatElevationDirective } from '@tap/standalone/directives/mat-elevation.directive';
import { eMatElevation, FeatureCard } from '@tap/shared/models/common/common.model';
import { CardDonateComponent, CardVolunteerComponent } from '@tap/standalone/components/';
import { FilterBooleanPipe } from '@tap/standalone/pipes';

import { supportList as cardList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-support',
  standalone: true,
  imports: [CommonModule,FilterBooleanPipe, MatElevationDirective, CardDonateComponent, CardVolunteerComponent],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  defaultElevation = eMatElevation.DEFAULT_ELEVATION;
  cards: Array<FeatureCard> = cardList;
}
