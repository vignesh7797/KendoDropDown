import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Handsontable from "handsontable";

@Component({
  selector: 'app-handson',
  templateUrl: './handson.component.html',
  styleUrls: ['./handson.component.css']
})
export class HandsonComponent implements OnInit {

   dataset:any;
   tableSettings={
     viewportColumnRenderingOffset: 100,
     width: 924,
     maxRows: 50,
     manualRowResize: true,
     manualColumnResize: true,
    columns: [
              {
                data: 'id',
                type: 'numeric',
                width: 60
              },
              {
                data:'name',
                type:'text' 
              },
              {
                data:'email',
                type:'text'
              },         
              {
                data: 'phone',
                type: 'numeric',
                width:120
              },
              {
                data: 'dob',
                type: 'date',
                dateFormat: 'MM/DD/YYYY'
              }
            ],
    colHeaders: ["ID", "Name", "Email", "Phone No.", "Date of Birth"],
    manualRowMove:true,
    manualColumnMove:true,
    contextMenu:true,
    filters: true,
    dropdownMenu: true,
    afterValidate: function(isValid: any, value: boolean, row: any, prop: any){
      if(value == false){
        	console.log( value, row, prop)    
          alert("Invalid")
      }
			
    }
   }

   

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://raw.githubusercontent.com/vignesh7797/Json/main/Users.json').subscribe(data =>{
      this.dataset = data;
    })
  }

}
