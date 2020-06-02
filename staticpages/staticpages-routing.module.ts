import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PageComponent} from './page/page.component';
import{ContactUsComponent} from './contact-us/contact-us.component';
import{LoginComponent} from './login/login.component';


const routes: Routes = [
  {path:'page/:slug',component:PageComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
