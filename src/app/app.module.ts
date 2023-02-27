import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Home1Component } from './home1/home1.component';
import { ContactComponent } from './contact/contact.component';
import { Header2Component } from './header2/header2.component';
import { TryUsNowComponent } from './try-us-now/try-us-now.component';
import { RefundComponent } from './refund/refund.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [

    AppComponent,
     HomeComponent,
     FooterComponent,
     HeaderComponent,
     LoginComponent,
     SignUpComponent,
     Home1Component,
     ContactComponent,
     Header2Component,
     TryUsNowComponent,
     RefundComponent,
     FaqComponent,
     PrivacyComponent,
     AboutComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
