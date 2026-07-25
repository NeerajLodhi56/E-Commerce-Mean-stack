import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Brand } from '../types/brand';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  
 http = inject(HttpClient);
  constructor() {}

getBrands() {
  return this.http.get<Brand[]>(environment.apiUrl+'/brand');
}

deleteBrand(id: string) {
return this.http.delete(`http://localhost:3000/brand/${id}`);
}

addBrand(name: string) {
 return this.http.post(environment.apiUrl+ '/brand',{
  name: name,
 }); 
}
getBrandById(id: string) {
  return this.http.get<Brand>(environment.apiUrl+ '/brand/' +id);
}

updateBrand(id: string, name: string) {
 return this.http.put(`http://localhost:3000/brand/${id}`,{
    name: name,
   }); 
  }

}
