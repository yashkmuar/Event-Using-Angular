import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
 // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Use a plain string instead of an Angular signal
  protected readonly title: string = 'event-using-angular';

  // Accept the DOM event optionally. This works without signals.
  handleEvent(event?: Event){
    console.log('Function called');
    console.log('title:', this.title);
    if (event) {
      console.log('Event:', event);
    }
  }
}
