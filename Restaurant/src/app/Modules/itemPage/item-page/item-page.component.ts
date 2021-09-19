import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {ItemService} from './item.service'

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  constructor(private http: HttpClient, private itemService: ItemService) { }
  data:any;
  ngOnInit(): void {
    let res = this.itemService.getItems({});  
    if(res!=false){
      this.data = res;
    }else{
      alert("Error during fetching Item Details!");
    }

  }

}