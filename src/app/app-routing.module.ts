import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSectionListComponent } from './components/recipe-section-list/recipe-section-list.component';
import { RecipeSectionDetailsComponent } from './components/recipe-section-details/recipe-section-details.component';
import { AddRecipeSectionComponent } from './components/add-recipe-section/add-recipe-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipe-section', pathMatch: 'full' },
  { path: 'recipe-section', component: RecipeSectionListComponent },
  { path: 'recipe-sections/:id', component: RecipeSectionDetailsComponent },
  { path: 'add', component: AddRecipeSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
