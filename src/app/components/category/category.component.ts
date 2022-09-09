import { Component, Input, OnInit } from '@angular/core';
import { ICategories } from 'src/app/utils/interfaces/categories.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() categories: ICategories[] = [];
  constructor() {}

  ngOnInit(): void {}

  checkAllCategories(event: any) {
    this.categories.forEach(
      (category) => (category.checked = event.target.checked)
    );
  }

  isAllCategoriesChecked() {
    return this.categories.every((category) => category.checked);
  }
}
