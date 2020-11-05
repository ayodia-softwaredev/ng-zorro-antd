import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-select-search',
  template: `
    <nz-select nzShowSearch nzAllowClear (nzOnSearch)="onSearch($event)" nzEnableHighlightOption nzPlaceHolder="Select a person" [(ngModel)]="selectedValue">
      <nz-option *ngFor="let _option of optionList" [nzLabel]="_option.name" [nzValue]="_option.value" id="{{_option.value}}"></nz-option>
    </nz-select>
    <p>id select : {{selectedValue}}</p>
  `,
  styles: [
    `
      nz-select {
        width: 200px;
      }
    `
  ]
})
export class NzDemoSelectSearchComponent {
  selectedValue = null;
  optionList = [{name:"value1",value:"value1"},{name:"value3",value:"value3"},{name:"value4",value:"value4"},{name:"value5",value:"value5"}];
  onSearch(value: string): void {
    if (value){ 
    this.optionList = [{name:"value6",value:"value6"},{name:"value66",value:"value66"},{name:"value666",value:"value666"},{name:"value7",value:"value7"},{name:"value8",value:"value8"}];
    }
  };
}
