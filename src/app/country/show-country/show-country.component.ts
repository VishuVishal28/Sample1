import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/sharedservices.service';
@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

  constructor(private service:SharedService) { }
  CountryList:any=[];

  ModalTitle!:string;
  ActivateAddEditComp:boolean=false;
  country1:any;

  ngOnInit(): void {
   this.refreshCountryList();
  
  }
  addClick(){
    this.country1={
      id:0,
      name:""
    };
    this.ModalTitle="Add Country";
    this.ActivateAddEditComp=true;

  }
  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshCountryList();
  }
  deleteClick(item:any){
    //debugger
    if(confirm('Are You Sure??'))
    {
    
      this.service.DeleteCountry(item.id).subscribe(data=>{
       //alert(data.toString());
      this.refreshCountryList();
    })
    }
  }
  refreshCountryList() {
    debugger
    this.service.getCountryList().subscribe(data => {
     // console.log("datacheck",data);
      
      this.CountryList = data;
   //this.DepartmentListWithoutFilter=data;
    });
  }

}
