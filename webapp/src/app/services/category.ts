
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MyCategory } from '../types/category';

@Injectable({
  providedIn: 'root',
})
export class Category {
  http = inject(HttpClient);
  constructor() {}

getCategories() {
  return this.http.get<MyCategory[]>('http://localhost:3000/category');
}

deleteCategory(id: string) {
  debugger
return this.http.delete(`http://localhost:3000/category/${id}`);
}

addCategory(name: string) {
 return this.http.post(`http://localhost:3000/category`,{
  name: name,
 }); 
}
getCategoryById(id: string) {
  return this.http.get<MyCategory>(`http://localhost:3000/category/${id}`);
}

updateCategory(id: string, name: string) {
  return this.http.put(`http://localhost:3000/category/${id}`,{
    name: name,
   }); 
  }
}