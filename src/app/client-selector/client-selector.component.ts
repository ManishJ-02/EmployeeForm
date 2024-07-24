import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-client-selector',
  templateUrl: './client-selector.component.html',
  styleUrls: ['./client-selector.component.scss']
})
export class ClientSelectorComponent implements OnInit {
  clients = ['Client A', 'Client B', 'Client C'];
  selectedClient: string = '';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  onClientChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedClient = target.value;

    let themeClass: string;
    switch (this.selectedClient) {
      case 'Client A':
        themeClass = 'blue-theme';
        break;
      case 'Client B':
        themeClass = 'green-theme';
        break;
      case 'Client C':
        themeClass = 'red-theme';
        break;
      default:
        themeClass = 'blue-theme';
        break;
    }

    this.themeService.setTheme(themeClass);
  }

}
