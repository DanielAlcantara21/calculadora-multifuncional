import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Alterei para styleUrls (plural)
})
export class AppComponent {
  title = 'Calculadora Multifuncional';
}
