import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {

    stockData:any;
    coinId:any;
    days:number =1;
    currency: string ="USD";

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.coinId=val["id"]
    });
    this.getStockData();
  }
   getStockData(){
    this.api.getCurrencyById(this.coinId).subscribe(res=>{
      this.stockData = res;
      console.log(this.stockData);
    })
   }
  
}
