import { Component } from '@angular/core';

const row_height :{[id:number]:number} = {1:400 , 3: 335 , 4:340}
@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,

})
export class HomeComponent {
  cols = 3
  category:any
  rowHeight = row_height[this.cols]

  onColumnsCountChange(colsNum:any){
    this.cols = colsNum
  this.rowHeight = row_height[this.cols]

  }

  onShowCategory(newCategory:any){    
    this.category =  newCategory
  }
}
