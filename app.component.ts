import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_binding';
  imgUrl="../assets/BridgeLabzLogo.png";

  ngOnInit(): void{
    this.title = "Hello from BridgeLabz.";
  }
}
