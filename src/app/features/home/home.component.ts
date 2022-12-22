import { Component } from '@angular/core';
import { eMatElevation,Card } from '@tap/shared/models/common/common.model';
@Component({
  selector: 'tap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'ClientApp';
  defaultElevation = eMatElevation.DEFAULT_ELEVATION;
}
