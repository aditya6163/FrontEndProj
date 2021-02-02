import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup

  constructor(private _dataService:DataService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      uname : new FormControl(""),
      pass : new FormControl(""),
      type : new FormControl(""),
    })
  }

  login(myform:NgForm)
  {
  
    console.log(myform.value);
    // this._dataService.loginData().subscribe(result=>{
    //   console.log(result);
    // if(result.password=value.pass)
    // })
      // sessionStorage.setItem('userName',myform.value.uname)
  }
}

