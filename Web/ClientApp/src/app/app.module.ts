import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from "@auth0/angular-jwt";

import { AuthGuard } from './account/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { LoginComponent } from './account/login/login.component';
import { ProfileComponent } from './account/profile/profile.component';
import { RegisterComponent } from './account/register/register.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

const appRoutes: Routes = [
  {   path: '', component: HomeComponent },
  {   path: 'login', component: LoginComponent},
  {   path: 'register', component: RegisterComponent},
  {   path: 'account', component: ProfileComponent, canActivate: [AuthGuard]},
  {   path: 'about', component: AboutComponent},
  {   path: 'privacypolicy', component: PrivacyPolicyComponent},
  {   path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44323"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
