import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [

  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-chat',
    component: ChatComponent
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'app-home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
