import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../../../services/category';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-form',
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './category-form.html',
  styleUrl: './category-form.scss',
})
export class CategoryForm {
name!:string;
categoriesService = inject(Category);
router  = inject(Router)
route = inject(ActivatedRoute)
isEdit = false;
id!: string;

ngOnInit(){
this.id = this.route.snapshot.params['id'];
console.log(this.id);
if(this.id){
this.isEdit = true;
this.categoriesService.getCategoryById(this.id).subscribe((result:any)=>{
console.log(result);
this.name = result.name
})
}
}
  add(){

this.categoriesService.addCategory(this.name).subscribe((result)=>{
  alert("category added")
  this.router.navigateByUrl("/admin/categories")
})
  }

  update(){
this.categoriesService.updateCategory(this.id, this.name).subscribe((result)=>{
  alert("category updated")
  this.router.navigateByUrl("/admin/categories")
})
  }
}
