import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatElevationDirective } from '@tap/standalone/directives/mat-elevation.directive';
import {
  eMatElevation,
  FeatureCard,
  TopicHeading,
} from '@tap/shared/models/common/common.model';
import {
  CardDonateComponent,
  CardVolunteerComponent,
  TopicHeadingComponent,
} from '@tap/standalone/components/';
import { FilterBooleanPipe } from '@tap/standalone/pipes';
import { topicList as headingList } from '@tap/shared/models/common/app.data';
import { supportList as cardList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-support',
  standalone: true,
  imports: [
    CommonModule,
    FilterBooleanPipe,
    MatElevationDirective,
    CardDonateComponent,
    CardVolunteerComponent,
    TopicHeadingComponent,
  ],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent {
  defaultElevation = eMatElevation.DEFAULT_ELEVATION;
  headings: Array<TopicHeading> = headingList;
  cards: Array<FeatureCard> = cardList;
}
