import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'', component: HomeComponent,pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'user/:userid', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
