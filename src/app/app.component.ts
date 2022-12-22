import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';

//Services
import { CoreService } from '@tap/core/services';
import { throttleTime } from 'rxjs/internal/operators/throttleTime';

// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //Subscriptions
  // private subscriptions: Subscription = new Subscription();

  //Variables
  isMobileViewPort: boolean = false;
  isSideNavOpen: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private coreService: CoreService
  ) {}

  async ngOnInit(): Promise<void> {
    // *Force NGX-Translate to load encode.json first
    // await this.translate.get('FORCE-LOAD-EN-FILE');

    //*Intiate Listeners
    this.initListeners();

    //*Get Application Data
    this.getData();
  }

  getData(): void {
    // Get Header Data
    // this.subscriptions.add(
    //   this.coreService.getHeaderDetails$().subscribe((resp) => {
    //     if (resp) {
    //       this.generateHeader(resp.result);
    //     }
    //   })
    // );
  }

  initListeners() {
    this.handleViewportLayout();
    this.handleSideBarMenuToggle();
  }
  private handleViewportLayout() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        if (state.matches) this.isMobileViewPort = true;
        else this.isMobileViewPort = false;
      });
  }

  private handleSideBarMenuToggle() {
    this.coreService.menuBtnClicked$
      .pipe(throttleTime(600))
      .subscribe(() => (this.isSideNavOpen = !this.isSideNavOpen));
  }

  // ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }
}
