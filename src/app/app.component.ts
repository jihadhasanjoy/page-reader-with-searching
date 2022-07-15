import { Component, OnInit } from '@angular/core';
import { data, IData } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular Vertical Tabs';
  selectIndex: number | undefined;
  values: IData[] = data;
  searchText='';
  text=``;
  ngOnInit() {
  }

  onClickItem(value: IData, index: number): void{
    this.selectIndex = index;
    this.text = value.desc;
  }
}


