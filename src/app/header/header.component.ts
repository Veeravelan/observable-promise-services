import { Component, OnInit, NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
