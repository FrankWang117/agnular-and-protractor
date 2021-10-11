import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-product-detail-modal',
	templateUrl: 'product-detail.component.html',
})
export class AppProductDetailModalComponent implements OnInit {
	constructor(@Inject(MAT_DIALOG_DATA) public data: { product?: any }) {}

	ngOnInit() {}
}
