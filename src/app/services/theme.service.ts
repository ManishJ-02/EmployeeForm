import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>('blue-theme'); // Default theme
  currentTheme$ = this.themeSubject.asObservable();

  constructor() { }

  setTheme(theme: string): void {
    this.themeSubject.next(theme);
    document.body.className = theme;
  }
}
