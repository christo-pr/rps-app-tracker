import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { BacklogPageComponent } from './modules/backlog/pages/backlog/backlog.page.component';
import { LoginPageComponent } from './modules/auth/pages/login/login.page.component';
import { DetailPageComponent } from './modules/backlog/pages/detail/detail.page.component';

const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: LoginPageComponent },
    { path: 'backlog', component: BacklogPageComponent },
    { path: 'detail/:id', component: DetailPageComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
