import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'car', pathMatch: 'full' },
  { path: 'car', loadChildren: () => import('./features/car/car.module').then(m => m.CarModule) },
  { path: 'fuel', loadChildren: () => import('./features/fuel/fuel.module').then(m => m.FuelModule) },
  { path: 'expenses', loadChildren: () => import('./features/expenses/expenses.module').then(m => m.ExpensesModule) },
  { path: 'inspection', loadChildren: () => import('./features/inspection/inspection.module').then(m => m.InspectionModule) },
  { path: 'parts', loadChildren: () => import('./features/parts/parts.module').then(m => m.PartsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
