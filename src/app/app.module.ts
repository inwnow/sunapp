import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { OpdHComponent } from './opd-h/opd-h.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserService } from './user.service';
import { DatasComponent } from './datas/datas.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        OpdHComponent,
        MainComponent,
        PagenotfoundComponent,
        DatasComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
