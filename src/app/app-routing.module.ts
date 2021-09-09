import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent } from './components/about/about.component';
import { AppMainComponent } from './components/main/main.component';
import { AppProductsComponent } from './components/products/products.component';
import { AppStoreComponent } from './components/store/store.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{
		path: 'home',
		component: AppMainComponent,
	},
	{
		path: 'about',
		component: AppAboutComponent,
	},
	{
		path: 'store',
		component: AppStoreComponent,
	},
	{
		path: 'products',
		component: AppProductsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
