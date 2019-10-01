import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MmCreateComponent} from "./mm/mm-create/mm-create.component";


const routes: Routes = [
  {path: "login", component: MmCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
