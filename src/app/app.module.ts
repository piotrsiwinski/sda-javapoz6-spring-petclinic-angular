import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './home/index/index.component';
import { ContactComponent } from './home/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerDetailsComponent } from './owner/owner-details/owner-details.component';
import {OwnerService} from './owner/owner.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { OurpetsComponent } from './ourpets/ourpets.component';
import { CookieService } from 'ngx-cookie-service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import {OwnerCreateComponent} from './owner/owner-create/owner-create.component';
import { ActivateComponent } from './auth/activate/activate.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    ErrorComponent,
    OwnerListComponent,
    OwnerDetailsComponent,
    LoginComponent,
    RegisterComponent,
    OurpetsComponent,
    UserComponent,
    OurpetsComponent,
    OwnerCreateComponent,
    ActivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OwnerService, CookieService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
