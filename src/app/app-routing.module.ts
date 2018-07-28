import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './home/index/index.component';
import {ContactComponent} from './home/contact/contact.component';
import {ErrorComponent} from './error/error.component';
import {OwnerListComponent} from './owner/owner-list/owner-list.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {OurpetsComponent} from './ourpets/ourpets.component';
import {AuthGuard} from './auth/auth.guard';
import {UserComponent} from './user/user.component';
import {OwnerCreateComponent} from './owner/owner-create/owner-create.component';
import {ActivateComponent} from './auth/activate/activate.component';
import {AddPetComponent} from './pet/add-pet/add-pet.component';

export const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'owners', component: OwnerListComponent, canActivate: [AuthGuard]},
  {path: 'owners', component: OwnerListComponent},
  {path: 'ourpets', component: OurpetsComponent},
  {path: 'pet', component: AddPetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'createowner', component: OwnerCreateComponent},
  {path: 'activate/:token', component: ActivateComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
