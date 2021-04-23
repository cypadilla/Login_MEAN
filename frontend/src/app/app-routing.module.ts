import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'/auth/login',pathMatch:'full'
  },
  {
    path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home',canActivate: [UserGuard],loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
