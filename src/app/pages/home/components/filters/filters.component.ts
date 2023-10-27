import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl:`./filters.component.html`
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter();
  public categories:any =['shoes' , 'cloths']
  
 public onShowCategory(category:any){
  this.showCategory.emit(category)
}
}