import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './pages/login/login.component';
import { NhansuComponent } from './pages/nhansu/nhansu.component';
import { DonnhapComponent } from './pages/donnhap/donnhap.component';
import { SanphamComponent } from './pages/sanpham/sanpham.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'nhan-su',
    component: NhansuComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'don-nhap',
    component: DonnhapComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'san-pham',
    component: SanphamComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
