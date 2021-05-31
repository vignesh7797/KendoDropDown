import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  {


  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
];



public treeItems: any[] = [
    {
        text: 'Furniture', id: 1, items: [
            { text: 'Tables & Chairs', id: 2 },
            { text: 'Sofas', id: 3 },
            { text: 'Occasional Furniture', id: 4 }
        ]
    },
    {
        text: 'Decor', id: 5, items: [
            { text: 'Bed Linen', id: 6 },
            { text: 'Carpets', id: 7 }
        ]
    }
];

public value = [this.listItems[0]];
public complexValue = { text: 'Decor', id: 5 };
public complexArrayValue = [{ text: 'Sofas', id: 3 }];

}
