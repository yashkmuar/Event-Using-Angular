import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
 // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title:string = 'event-using-angular';

  handleEvent(event:MouseEvent){
    console.log('Function called',event.type);
    console.log('Function called',event.target);
    console.log('Function called', event.target ? (event.target as HTMLInputElement).name : undefined);
    console.log('Function called',(event.target as Element).className);
  }
}
