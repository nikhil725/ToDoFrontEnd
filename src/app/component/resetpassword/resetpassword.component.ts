import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  model : any={};

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  resetPassword(){

    console.log(this.model);
    this.userService.registerUser('resetPassword',this.model).subscribe( response =>{
      console.log(this.model);
       console.log("successfull", response);
    });


    
  }

}
