/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders }from '@angular/core/src/metadata/ng_module';
import {Routes, RouterModule }from '@angular/router';

import {AboutComponent }from './about/about.component';
import {HomeComponent }from './home/home.component';
import {OpdHComponent }from './opd-h/opd-h.component';
import {MainComponent}from './main/main.component';
import {DatasComponent}from './datas/datas.component'
import {PagenotfoundComponent}from './pagenotfound/pagenotfound.component'


export const ROUTES:Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'about', component:AboutComponent},
    {path:'opd_h', component:OpdHComponent},
    {path:'main', component:MainComponent},
    {path:'datas/:hn/:regNo', component:DatasComponent} ,
    {path:'**', component:PagenotfoundComponent}

];

export const ROUTING:ModuleWithProviders = RouterModule.forRoot(ROUTES);
