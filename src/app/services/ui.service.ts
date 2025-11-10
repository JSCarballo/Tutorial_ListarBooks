import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      this.darkMode.next(isDarkMode);
    }
  }

  toggleDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      const newDarkMode = !this.darkMode.value;
      this.darkMode.next(newDarkMode);
      localStorage.setItem('darkMode', newDarkMode.toString());
    }
  }
}
