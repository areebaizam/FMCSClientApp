import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeatureComponent } from '@tap/standalone/components';
import { SmallWidgetsComponent } from '@tap/standalone/containers';
import { MatElevationDirective } from '@tap/standalone/directives';
import { FilterBooleanPipe } from '@tap/standalone/pipes';

import { eMatElevation, FeatureCard } from '@tap/shared/models/common/common.model';
import { servicesList as cardList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-features',
  standalone: true,
  imports: [CommonModule, MatElevationDirective, CardFeatureComponent, SmallWidgetsComponent, FilterBooleanPipe],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  defaultElevation = eMatElevation.DEFAULT_ELEVATION;
  cards: Array<FeatureCard> = cardList;
}
