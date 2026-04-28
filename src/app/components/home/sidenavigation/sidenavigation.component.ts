import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from '../services/category.service';
import { Category } from '../types/category';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.css',
})
export class SidenavigationComponent {
  faAngleDown = faAngleDown;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId,
    );
  }

  trackById = (_: number, item: any) => item.id;
}
