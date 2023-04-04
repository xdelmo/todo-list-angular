import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListManagerComponent } from './components/list-manager/list-manager.component';

const routes: Routes = [{ path: 'list', component: ListManagerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
