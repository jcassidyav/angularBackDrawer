import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  constructor(private router: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  goBack(): void {
    this.router.back();
  }

  goForward(): void {
    this.router
                .navigate(["featured","thevar"], {
                  transition: {
                      name: "slideLeft",
                      duration: 500,
                      curve: "linear"
                  },
                  clearHistory: false
              });
  }
}
