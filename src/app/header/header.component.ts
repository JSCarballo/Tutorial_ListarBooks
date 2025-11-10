import { Component } from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private uiService: UiService) { }

  toggleDarkMode() {
    this.uiService.toggleDarkMode();
  }
}
