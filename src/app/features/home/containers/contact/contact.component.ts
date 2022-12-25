import { Component } from '@angular/core';
import {
  ContactFormComponent,
  ContactInfoComponent,
  TopicHeadingComponent,
} from '@tap/standalone/components';

import { TopicHeading } from '@tap/shared/models/common/common.model';
import { topicList as headingList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-contact',
  standalone: true,
  imports: [ContactFormComponent, ContactInfoComponent, TopicHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  headings: Array<TopicHeading> = headingList;
}
