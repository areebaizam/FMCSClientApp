import { Component } from '@angular/core';
import { TopicHeadingComponent } from '@tap/standalone/components';

import { TopicHeading } from '@tap/shared/models/common/common.model';
import { topicList as headingList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-main',
  standalone: true,
  imports: [TopicHeadingComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  headings: Array<TopicHeading> = headingList;
}
