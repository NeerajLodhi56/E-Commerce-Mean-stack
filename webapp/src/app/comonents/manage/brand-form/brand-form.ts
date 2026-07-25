import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '../../../services/brand-service';


@Component({
  selector: 'app-brand-form',
  imports: [FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './brand-form.html',
  styleUrl: './brand-form.scss',
})
export class BrandForm {

name!:string;
brandService = inject(BrandService);
router  = inject(Router)
route = inject(ActivatedRoute)
isEdit = false;
id!: string;

ngOnInit(){
this.id = this.route.snapshot.params['id'];
console.log(this.id);
if(this.id){
this.isEdit = true;
this.brandService.getBrandById(this.id).subscribe((result:any)=>{
console.log(result);
this.name = result.name
})
}
}
  add(){

this.brandService.addBrand(this.name).subscribe((result)=>{
  alert("Brand added")
  this.router.navigateByUrl("/admin/brands")
})
  }

  update(){
this.brandService.updateBrand(this.id, this.name).subscribe((result)=>{
  alert("Brand updated")
  this.router.navigateByUrl("/admin/brands")
})
  }


}
