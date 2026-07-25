import { Component, inject, ViewChild } from '@angular/core';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Brand } from '../../../types/brand';
import { BrandService } from '../../../services/brand-service';
@Component({
  selector: 'app-brands',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatButtonModule,RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.scss',
})
export class Brands {

displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource!: MatTableDataSource<Brand>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
brandServices = inject(BrandService)
  constructor() {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit() {
    this.getBrands()
  }
  getBrands(){
    this.brandServices.getBrands().subscribe((data)=>{
      this.dataSource = new MatTableDataSource( data as any );
    })
  }
  deleteBrand(id:string){
    this.brandServices.deleteBrand(id).subscribe({
      next:(data)=>{
      alert("brand deleted" )
        this.getBrands()
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
