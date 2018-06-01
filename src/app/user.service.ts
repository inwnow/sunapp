import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
    async getUsers(hn){
        let url=`http://localhost:3002/users/OPD_H/${hn}`;
        let rs : any=await this.http.get(url).toPromise();
        return rs.json();

    }

    async getPatient(hn){
        let url=`http://localhost:3002/users/PATIENT/${hn}`;
        let rs : any=await this.http.get(url).toPromise();
        return rs.json();
    }

    async getCard(hn,regNo){
        let url=`http://localhost:3002/users/ScanCard/${hn}/${regNo}`;
        let rs : any=await this.http.get(url).toPromise();
        return rs.json();
    }

    async getVital(hn,regNo){
        let url=`http://localhost:3002/users/VitalSign/${hn}/${regNo}`;
        let rs : any=await this.http.get(url).toPromise();
        return rs.json();
    }

    async getPATDIAG(hn,regNo){
        let url=`http://localhost:3002/users/PATDIAG/${hn}/${regNo}`;
        let rs : any=await this.http.get(url).toPromise();
        return rs.json();
    }

    async getLabres_d(hn,regNo){
        let url=`http://localhost:3002/users/Labres_d/${hn}/${regNo}`;
        let rs : any=await this.http.get(url).toPromise();
        return rs.json();
    }

}
