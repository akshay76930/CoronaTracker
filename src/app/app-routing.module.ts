import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from 'src/routes';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
