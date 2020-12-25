import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Status} from '../status';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  nameValue:string = null;
  ageValue:number =null ;
  regNumValue :string = null;
  status: Status;
  error: boolean = false;


  constructor(private registerService : RegisterService) { }

  ngOnInit() {
  }

  onSubmit(){

    if (this.nameValue == null || this.nameValue == '')
    {
        //throw error
        this.error = true;

    }
    else if (this.ageValue == null)
    {
      //throw error
      this.error = true;
    }
    else if ( this.regNumValue == null || this.regNumValue == '')
    {
      //throw error
      this.error = true;

    }
    else{
    this.registerService.registerStudent(this.nameValue,this.ageValue,this.regNumValue).subscribe(status => this.status = status);
    }
  }
}
