import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'detail/', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'essai', loadChildren: './essai/essai.module#EssaiPageModule' },
  { path: 'essai/:id', loadChildren: './essai/essai.module#EssaiPageModule' }
  //{ path: '', loadChildren: './favorite-movie.service#FavoriteMovieService'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
