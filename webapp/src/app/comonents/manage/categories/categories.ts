import { Component, inject, ViewChild } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Category } from '../../../services/category';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MyCategory } from '../../../types/category';
@Component({
  selector: 'app-categories',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatButtonModule,RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories   {
 displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource!: MatTableDataSource<MyCategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
categoryService = inject(Category)
  constructor() {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit() {
    this.getCategories()
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((data)=>{
      this.dataSource = new MatTableDataSource( data as any );
    })
  }
  deleteCategory(id:string){
    this.categoryService.deleteCategory(id).subscribe({
      next:(data)=>{
      alert("category deleted")
        this.getCategories()
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

