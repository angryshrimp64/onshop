import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './home';
import {AppPagesRouting} from './app-pages.routing';
import {AppPagesComponent} from './app-pages.component';
import {CategoriesPageComponent} from './categories';
import {InventoryPageComponent} from './inventory';
import {ContactUsPageComponent} from './contact-us';
import {ProductDetailsPageComponent} from './product-details';
import {ProfilePageComponent} from './profile';
import {TrackOrderPageComponent} from './track-order';
import {CartModule} from '../../_core';
import {CartPageComponent} from './cart';
import {RepositoryModule} from '../../_data';
import {ThemeModule} from '../../_domain';

@NgModule({
  declarations: [
    AppPagesComponent,

    CartPageComponent,
    CategoriesPageComponent,
    ContactUsPageComponent,
    HomePageComponent,
    InventoryPageComponent,
    ProductDetailsPageComponent,
    ProfilePageComponent,
    TrackOrderPageComponent
  ],
  imports: [
    /// angular modules
    CommonModule,

    /// app modules
    ThemeModule,
    RepositoryModule,

    /// routing
    AppPagesRouting,
    CartModule
  ],
  exports: [],
  providers: []
})
export class AppPagesModule {
}
