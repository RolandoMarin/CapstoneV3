import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  {path: "", redirectTo: "stock-list", pathMatch: "full"},
  {path:"stock-list", component: StockListComponent  },
  {path: "stock-details/:id" , component: StockDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
