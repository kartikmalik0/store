import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.component.html`,
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter()
  sort = "desc"
  itemsShowCount = 12
  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }
  onItemsUpdated(count: any): void {
    this.itemsShowCount = count
  }
  onColumsUpdate(colsNum:any) : void{
    this.columnsCountChange.emit(colsNum)
  }
}
