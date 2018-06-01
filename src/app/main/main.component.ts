import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
    users:any=[];
    loading=false;
  constructor(private userService:UserService) { }


  ngOnInit() {

  }



}
