import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mynewapp';

  constructor(
    private uiService: UiService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.uiService.darkMode$.subscribe(darkMode => {
        if (darkMode) {
          this.renderer.addClass(document.body, 'dark-mode');
        } else {
          this.renderer.removeClass(document.body, 'dark-mode');
        }
      });
    }
  }
}
