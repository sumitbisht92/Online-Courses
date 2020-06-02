import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PageNotFoundComponent}from './page-not-found/page-not-found.component'
import { CourseListComponent } from './courses/course-list/course-list.component';
import{CourseDetailComponent} from './courses/course-detail/course-detail.component';
import{PageComponent} from './staticpages/page/page.component';
import{ContactUsComponent} from './staticpages/contact-us/contact-us.component';
import{ LoginComponent } from './staticpages/login/login.component';



const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'course', component:CourseListComponent},
  {path:'course/:id',component:CourseDetailComponent},
  {path:'page/:slug',component:PageComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
