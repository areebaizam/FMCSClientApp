import { Component } from '@angular/core';
// import { TopicHeadingComponent } from '@tap/standalone/components/';
import { TopicHeadingComponent } from '../topic-heading/topic-heading.component';
import { TopicHeading } from '@tap/shared/models/common/common.model';
import { topicList as headingList } from '@tap/shared/models/common/app.data';
@Component({
  selector: 'tap-intro',
  standalone: true,
  imports: [TopicHeadingComponent],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent {
  headings: Array<TopicHeading> = headingList;
}
