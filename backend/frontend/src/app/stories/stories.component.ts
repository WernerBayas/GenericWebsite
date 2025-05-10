import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css'
})
export class StoriesComponent {
  isStoryPopUpVisible = false; // Tracks whether the menu is visible

  OpenAddStory() {
    this.isStoryPopUpVisible = true; // Toggle the menu visibility
    console.log("open add story");
  }

  closeModal() {
    this.isStoryPopUpVisible = false;
    console.log("close add story");
  }
}
