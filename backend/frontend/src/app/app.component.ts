import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ChildrenOutletContexts } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
})
export class AppComponent {

  title = 'Matcher'; // Title of the application
  isMenuVisible = false; // Tracks whether the menu is visible

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; // Toggle the menu visibility
  }
}