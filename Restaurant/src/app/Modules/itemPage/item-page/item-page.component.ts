// import { Component, OnInit } from '@angular/core';
// import {HttpClient, HttpClientModule} from '@angular/common/http'
// import {ItemService} from './item.service'

// @Component({
//   selector: 'app-item-page',
//   templateUrl: './item-page.component.html',
//   styleUrls: ['./item-page.component.scss']
// })
// export class ItemPageComponent implements OnInit {
//   constructor(private http: HttpClient, private itemService: ItemService) { }
//   data:any;
//   ngOnInit(): void {
//     let res = this.itemService.getItems({}).subscribe((response)=>{
//       console.log("Response Itempage ",response)
//     }); 
    

//   }

// }



import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {ItemService} from './item.service'
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  items:any;
  addItemErr:boolean=false;
  initItems:any;
  submitPayload:any;
  payload:any=[];
  constructor(private http:HttpClient, private itemService:ItemService, private router:Router) { 
    this.submitPayload = [];
  }

  ngOnInit(): void {
    this.itemService.getItems({}).subscribe((response:any)=>{
      console.log("Response Admin Item ",response);
      this.items = response.data;
      this.initItems = [];
      this.items.forEach((element: any) => {
        if(element.quantity){
          console.log("element quantity",element.quantity);
          
          var id = element._id;
          let obj = {
            "id":id,
            "count": 1 ,
            "isSelected": 0
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
    let isSelected;
    let count: any;
    let index;
    // setTimeout(() => {
    //   document.getElementById(id)!.style.backgroundColor = "blue";
    //   document.getElementById(id)!.innerText = "Added"
    // }, 90);
    
    this.initItems.find((ele:any, i:any)=>{
      if(ele.id==id){
        console.log("in get count",ele.count)
        count= ele.count;
        isSelected = ele.isSelected;
        index = i;
      }
    });
    if(isSelected){
      console.log("if is select")
      this.submitPayload.splice(index, 1);
      setTimeout(() => {
      document.getElementById(id)!.style.backgroundColor = "red";
      document.getElementById(id)!.innerText = "Add"
    }, 90);
    this.initItems.find((ele:any, i:any)=>{
      if(ele.id==id){
        this.initItems[i] = {"id":id, "count":(count), "isSelected":0}
      }
    });
    }else{
      console.log("else is select")
      setTimeout(() => {
      document.getElementById(id)!.style.backgroundColor = "blue";
      document.getElementById(id)!.innerText = "Added"
    }, 90);
      let obj = {
        "id": id,
       "count": count
      };
      this.initItems.find((ele:any, i:any)=>{
        if(ele.id==id){
          this.initItems[i] = {"id":id, "count":(count), "isSelected":1}
        }
      });
      this.submitPayload.push(obj);
      }

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
          this.initItems[i] = {"id":id, "count":(count+1), "isSelected":0}
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
          this.initItems[i] = {"id":id, "count":(count-1), "isSelected":0}
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
      this.submitPayload.forEach((element: any) => {
        let id = element.id;
        let count  = element.count;
        let no;
        let name;
        let cost;
        this.items.find((ele:any)=>{
          if(ele._id == id){
            no = ele.no;
            name = ele.name;
            cost = ele.cost;
          }
        });
        let obj = {
          "id": id,
          "count": count,
          "no": no,
          "name": name,
          "cost": cost
        }
        this.payload.push(obj);
      });
      console.log(this.payload);
      this.router.navigate(['/checkout'], { state: { payload: this.payload } })
    }
  }

}
