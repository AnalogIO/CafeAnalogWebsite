import { Component } from '@angular/core';
import { StatsService } from './stats.service';
import { BaristaService } from './barista.service';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StatsService, BaristaService, ScheduleService]
})
export class AppComponent {
  title = 'app';
}
