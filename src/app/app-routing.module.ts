import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ReportComponent } from './modules/report/report.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
    children: [
    {
      path: '',
      component: DashboardComponent
    }, 
    {
      path: 'posts',
      component: PostsComponent
    },
    {
      path: 'report',
      component: ReportComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
