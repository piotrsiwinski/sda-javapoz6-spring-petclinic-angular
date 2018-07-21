import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck  {
  isLogged = true;

  constructor (private authService: AuthService) {
  }

  ngOnInit() {
    this.isLogged = this.authService.isUserLogged();
  }

  ngDoCheck(): void {
    this.isLogged = this.authService.isUserLogged();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLogged = this.authService.isUserLogged();
  }

}

