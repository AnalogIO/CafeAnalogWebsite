import { Component, OnInit } from '@angular/core';
import { BaristaService } from '../barista.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private baristaService: BaristaService) { }

  ngOnInit() {
  }

}
