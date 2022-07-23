import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { ContainerComponent } from './container/container.component';
import { ContentTabComponent } from './content-tab/content-tab.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParallaxComponent,
    ContainerComponent,
    ContentTabComponent,
    CarouselComponent,
    HomePageComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    ProfilePageComponent,
    StorePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
