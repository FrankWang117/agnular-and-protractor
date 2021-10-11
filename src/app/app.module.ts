import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppProductsComponent } from './components/products/products.component';
import { AppAboutComponent } from './components/about/about.component';
import { AppStoreComponent } from './components/store/store.component';
import { AppProductDetailModalComponent } from './components/shared/product-detail/product-detail.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		AppComponent,
		AppMainComponent,
		AppProductsComponent,
		AppAboutComponent,
		AppStoreComponent,
		AppProductDetailModalComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FormsModule,
		AppRoutingModule,
		MatDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
