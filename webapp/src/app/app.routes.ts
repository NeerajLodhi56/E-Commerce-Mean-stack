import { Routes } from '@angular/router';
import { Home } from './comonents/home/home';
import { Categories } from './comonents/manage/categories/categories';
import { CategoryForm } from './comonents/manage/category-form/category-form';
import { Brands } from './comonents/manage/brands/brands';
import { BrandForm } from './comonents/manage/brand-form/brand-form';

export const routes: Routes = [
{
  path: "",
  component: Home
},
{
  path:"admin/categories",
  component: Categories
},
{
  path:"admin/categories/add",
  component: CategoryForm
},

{
  path:"admin/categories/:id",
  component: CategoryForm
},

{
  path:"admin/brands",
  component: Brands
},
{
  path:"admin/brands/add",
  component: BrandForm
},

{
  path:"admin/brands/:id",
  component: BrandForm
},

];
