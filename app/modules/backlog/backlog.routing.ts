import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthGuard } from '../../core/services';
import { BacklogPageComponent, DetailPageComponent } from './pages';

const routes: Routes = [
  { path: 'backlog/:preset', component: BacklogPageComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailPageComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BacklogRoutingModule { }
