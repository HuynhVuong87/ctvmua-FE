import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Configuration, ConfigurationParameters, ApiModule } from './openapi';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MAT_HAMMER_OPTIONS, MAT_DATE_LOCALE } from '@angular/material/core';
import { HeaderComponent } from './components/header/header.component';
import { RefPipe } from './pipes/ref.pipe';
import { DonnhapComponent } from './pages/donnhap/donnhap.component';
import { SanphamComponent } from './pages/sanpham/sanpham.component';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    basePath: 'http://localhost:8081',
    // basePath: 'https://us-central1-ctvmua.cloudfunctions.net/api'
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RefPipe,
    DonnhapComponent,
    SanphamComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ApiModule.forRoot(apiConfigFactory),
    NgxSpinnerModule,
    FlexLayoutModule
  ],
  providers: [AngularFireAuthGuard, {
    provide: MAT_HAMMER_OPTIONS,
    useValue: {
      cssProps: {
        userSelect: true
      }
    },
  }, {provide: MAT_DATE_LOCALE, useValue: 'vi-VN'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
