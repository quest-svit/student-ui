import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent} from './registration/registration.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
