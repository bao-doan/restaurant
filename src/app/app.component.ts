import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from '@angular/router';
import { fadeAnimation } from './animations/fade-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'app';
  isLoading = false;
  constructor(private router:Router) {
    this.router.events.subscribe((event: Event) => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.isLoading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationError:
        case event instanceof NavigationCancel: {
          this.isLoading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
