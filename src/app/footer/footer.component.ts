import { Component, OnInit, NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
