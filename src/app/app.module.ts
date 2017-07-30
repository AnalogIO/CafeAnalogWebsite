import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MembersComponent } from './members/members.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    StatsComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'home',
      component: HomeComponent
    },{
      path: 'members',
      component: MembersComponent
    },{
      path: 'stats',
      component: StatsComponent
    },{
      path: 'about',
      component: AboutComponent
    },{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
