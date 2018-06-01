import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {UserService }from '../user.service';
@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit {
    hn: any;
    regNo:any;
    loading = false;
    vitals:any = [];
    diags:any = [];
    labs:any = [];
  constructor(private route: ActivatedRoute,private userService:UserService) {
    this.hn = this.route.snapshot.params.hn;
    this.regNo = this.route.snapshot.params.regNo;
   }

  ngOnInit() {
      this.getVital(this.hn,this.regNo);
      this.getPATDIAG(this.hn,this.regNo);
      this.getLabres_d(this.hn,this.regNo);

  }

    async getVital(hn,regNo) {
    this.loading = true;
    let rs = await this.userService.getVital(hn,regNo);
    this.vitals = rs.rows;
    this.loading = false;
    }

    async getPATDIAG(hn,regNo) {
    this.loading = true;
    let rs = await this.userService.getPATDIAG(hn,regNo);
    this.diags = rs.rows;
    this.loading = false;
    }

    async getLabres_d(hn,regNo) {
    this.loading = true;
    let rs = await this.userService.getLabres_d(hn,regNo);
    this.labs = rs.rows;
    this.loading = false;
    }

}
