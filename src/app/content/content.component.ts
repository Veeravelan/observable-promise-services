import { Component, OnInit, NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
