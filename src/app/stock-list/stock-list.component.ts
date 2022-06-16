import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  bannerData:any =[];
  displayedColumns: string[] = ['symbol', 'current_price' , 'market_cap_change_percentage_24h','market_cap']
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
  }
  getBannerData(){
    this.api.getTrendingCurrency("USD").subscribe(res=>{
      console.log(res);
      this.bannerData=res;
    })
  }
  getAllData(){
    this.api.getCurrency("USD").subscribe(res=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
