import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {UserService }from '../user.service';

@Component({
  selector: 'app-opd-h',
  templateUrl: './opd-h.component.html',
  styleUrls: ['./opd-h.component.scss']
})
export class OpdHComponent implements OnInit {

    hn: any;
    regNo:any;
    loading = false;
    cards:any = [];
    users:any = [];
    patients:any = [];
    sex: string;
  constructor(private route: ActivatedRoute,private userService:UserService) {
    this.hn = this.route.snapshot.params.hn;
    this.regNo = this.route.snapshot.params.regNo;
   }

   ngOnInit() {
    this.getUsers(this.hn);
}

async getUsers(hn) {
this.loading = true;
let rs = await this.userService.getUsers(hn);
this.users = rs.rows;
this.loading = false;
}

async getPatient() {

    this.loading = true;
    let rs = await this.userService.getPatient(this.hn);
    this.patients = rs.rows;
    this.loading = false;
    this.getUsers(this.hn)
    }

async getCard(hn,regNo) {

    this.loading = true;
    let rs = await this.userService.getCard(hn,regNo);
    //console.log(rs);
    this.cards = rs.rows;
    console.log(this.cards)
    this.loading = false;
    }



}
