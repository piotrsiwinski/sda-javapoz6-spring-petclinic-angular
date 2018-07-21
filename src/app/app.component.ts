import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged = true;

  constructor () {
  }

  ngOnInit() {
    console.log(`Czy user zalogowany: ${this.isLogged}`);
  }
}

