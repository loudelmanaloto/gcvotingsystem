import { Component, OnInit, NgModule } from '@angular/core';
import { PaymentsComponent } from '../payments/payments.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

@NgModule({
  imports: [
    PaymentsComponent
  ]

  
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
