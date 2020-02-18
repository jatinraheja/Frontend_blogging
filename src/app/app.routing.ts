import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {BlogdetailsComponent} from './blogdetails/blogdetails.component';
import {AddblogComponent} from './addblog/addblog.component';
import {MyblogsComponent} from './myblogs/myblogs.component';
import {EditblogComponent} from './editblog/editblog.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {FollowingComponent} from './following/following.component';
import {MyfollowersComponent} from './myfollowers/myfollowers.component';

export const MAIN_ROUTES: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'profile',
    component : MyprofileComponent
  },
  {
    path : 'editprofile',
    component : EditprofileComponent
  },
  {
    path : 'details/:id',
    component : BlogdetailsComponent
  },
  {
    path : 'home/:search',
    component : HomeComponent
  },
  {
    path : 'addblog',
    component : AddblogComponent
  },
  {
    path : 'myblog',
    component : MyblogsComponent
  },
  {
    path : 'edit',
    component: EditblogComponent
  },
  {
    path: 'edit/:id',
    component: EditblogComponent
  },
  {
    path: 'userprofile',
    component: UserprofileComponent
  },
  // {
  //   path: 'userprofile/:id',
  //   component: UserprofileComponent
  // },
  {
    path: 'userprofile/:username',
    component: UserprofileComponent
  },
  {
    path: 'following',
    component: FollowingComponent
  },
  {
    path: 'myfollowers',
    component: MyfollowersComponent,
  }
];
