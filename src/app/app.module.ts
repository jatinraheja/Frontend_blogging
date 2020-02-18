import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BlogsdataService} from './blogsdata.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { AddblogComponent } from './addblog/addblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FollowingComponent } from './following/following.component';
import { MyfollowersComponent } from './myfollowers/myfollowers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    BlogdetailsComponent,
    MyprofileComponent,
    EditprofileComponent,
    MyblogsComponent,
    AddblogComponent,
    EditblogComponent,
    UserprofileComponent,
    FollowingComponent,
    MyfollowersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BlogsdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
