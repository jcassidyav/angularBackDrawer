import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { DelayResolve } from './browse/browse-resolver';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'browse',
    loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
    resolve: { message: DelayResolve },
    //runGuardsAndResolvers: "always"
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'featured/thevar',
    loadChildren: () => import('~/app/featured/featured.module').then((m) => m.FeaturedModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
