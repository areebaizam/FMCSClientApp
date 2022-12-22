import { Component } from '@angular/core';
import { CardFeatureComponent } from '../card-feature/card-feature.component';
import { MatElevationDirective } from '../../directives/mat-elevation.directive';
import { eMatElevation } from '@tap/shared/models/common/common.model';

@Component({
  selector: 'tap-card-feature-container',
  standalone: true,
  imports: [CardFeatureComponent, MatElevationDirective],
  templateUrl: './card-feature-container.component.html',
  styleUrls: ['./card-feature-container.component.scss']
})
export class CardFeatureContainerComponent {
  defaultElevation = eMatElevation.DEFAULT_ELEVATION;
}
