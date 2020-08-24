import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './share/component/login/login.component';
import {HomepageComponent} from "./mainpage/homepage.component";
import {ProfileComponent} from "./share/component/profile/profile.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {path: 'profile/:id', component: ProfileComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
