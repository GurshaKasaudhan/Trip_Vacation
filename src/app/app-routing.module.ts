import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RefundComponent } from './refund/refund.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TryUsNowComponent } from './try-us-now/try-us-now.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'contact',component:ContactComponent},
  {path:'header2',component:Header2Component},
  {path:'footer',component:FooterComponent},
  {path:'tryus',component:TryUsNowComponent},
  {path:'refund',component:RefundComponent},
  {path:'faq',component:FaqComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
