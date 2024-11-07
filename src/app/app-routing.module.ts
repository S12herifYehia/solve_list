import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },

  {
    path: 'overview',
    loadChildren: () =>
      import('./components/overview/overview.module').then(
        (m) => m.OverviewModule
      ),
  },

  {
    path: 'custom',
    loadChildren: () =>
      import('./components/customization/customization.module').then(
        (m) => m.CustomizationModule
      ),
  },


  {
    path: 'implement',
    loadChildren: () =>
      import('./components/implement/implement.module').then(
        (m) => m.ImplementModule
      ),
  },


  
  {
    path: 'intergration',
    loadChildren: () =>
      import('./components/integration/integration.module').then(
        (m) => m.IntegrationModule
      ),
  },


  {
    path: 'migration',
    loadChildren: () =>
      import('./components/migration/migration.module').then(
        (m) => m.MigrationModule
      ),
  },


  {
    path: 'support',
    loadChildren: () =>
      import('./components/support/support.module').then(
        (m) => m.SupportModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
