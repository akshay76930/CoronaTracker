import { Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderComponent } from './app/header/header.component';
import { WorldComponent } from './app/world/world.component';

export const routes: Routes = [
  { path: 'home',  component: HeaderComponent}, 
  { path: 'about/:id',component: AboutComponent },
  { path : 'world', component:WorldComponent},
  {path: 'footer',component:FooterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
