import { Component, OnInit } from '@angular/core';
import { ConfirmationDataService } from 'src/app/Services/confirmation-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  message: string = "";
  name: string = "";
  total: string = "";
  constructor(private confirmationData :ConfirmationDataService) { }

  ngOnInit(): void {
    this.confirmationData.currentMessage.subscribe(message => this.message = message);
    var values = this.message.split(",");
    this.name = values[0];
    this.total = values[1];
  }

}
