import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographersComponent } from './photographers/photographers.component';
import { PhotographerDetailComponent } from './photographer-detail/photographer-detail.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
     path: '',
     component: PhotographersComponent
   },
  {
     path: 'about',
     component: AboutComponent
   },
   {
    path: 'photographer/:id',
    component: PhotographerDetailComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
