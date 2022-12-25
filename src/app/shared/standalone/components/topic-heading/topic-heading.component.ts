import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { TopicHeading } from '@tap/shared/models/common/common.model';

@Component({
  selector: 'tap-topic-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-heading.component.html',
  styleUrls: ['./topic-heading.component.scss'],
})
export class TopicHeadingComponent implements OnInit {
  @Input() heading: TopicHeading = new TopicHeading();
  @Input() alignLeft: Boolean = false;
  //Variables
  isMobileViewPort: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) this.isMobileViewPort = true;
        else this.isMobileViewPort = false;
      });
  }
}
