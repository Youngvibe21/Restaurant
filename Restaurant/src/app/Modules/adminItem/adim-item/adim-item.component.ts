import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {AdminItemService} from './admin-item.service'
@Component({
  selector: 'app-adim-item',
  templateUrl: './adim-item.component.html',
  styleUrls: ['./adim-item.component.scss']
})
export class AdimItemComponent implements OnInit {
  items:any;
  addItemErr:boolean=false;
  initItems:any;
  submitPayload:any;
  constructor(private http:HttpClient, private adminItemService:AdminItemService, private router:Router) { 
    this.submitPayload = [];
  }

  ngOnInit(): void {
    this.adminItemService.getInventory({}).subscribe((response:any)=>{
      console.log("Response Admin Item ",response);
      this.items = response.data;
      this.initItems = [];
      this.items.forEach((element: any) => {
        if(element.quantity){
          console.log("element quantity",element.quantity);
          
          var id = element._id;
          let obj = {
            "id":id,
            "count": 1 
          }
          console.log("calling push")
          this.initItems.push(obj);
        }
      });
      console.log("initItemas",this.initItems)
    });
  }
  submitItem(id:any){
    console.log("called submitItem ",id);
    let count = 0;
    this.initItems.find((ele:any)=>{
      if(ele.id==id){
        console.log("in get count",ele.count)
        count= ele.count;
      }
    });
    let obj = {
      "id": id,
      "count": count
    }
    this.submitPayload.push(obj);

  }
  increment(id:any){
    this.initItems.find((e:any, i:any)=>{
      if(e.id == id){
        const count = e.count;
        let quant=0;
        this.items.find((ele:any)=>{
          if(ele._id == id){
            quant=ele.quantity;
          }
        });
        if(e.count<(quant)){
          this.initItems[i] = {"id":id, "count":(count+1)}
        }
        
      }
    })
  }
  decrement(id:any){
    this.initItems.find((e:any, i:any)=>{
      if(e.id == id){
        const count = e.count;
        let quant =0;
        this.items.find((ele:any)=>{
          if(ele._id == id){
            quant = ele.quantity;
          }
        });
        console.log("dec quantity",quant)
        if(e.count>1){
          this.initItems[i] = {"id":id, "count":(count-1)}
        }
      }
    })
  }

  getQuant(id:any){
    console.log("getcoun");
    let count = 0;
    this.initItems.find((ele:any)=>{
      if(ele.id==id){
        console.log("in get count",ele.count)
        count= ele.count;
      }
    });
    return count;
  }
  
  submit(){
    console.log("submit payload ", this.submitPayload);
    if(!this.submitPayload.length){
      alert("Please select an Item to proceed")
      this.addItemErr = true;
    }else{
      this.router.navigate(['/'], { state: { payload: this.submitPayload } })
    }
  }

}
