import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AppProductDetailModalComponent } from '../shared/product-detail/product-detail.component';
@Component({
	selector: 'app-products',
	templateUrl: 'products.component.html',
})
export class AppProductsComponent implements OnInit {
	public products: any[] = [];

	public loadingDone = false;

	private products$ = new BehaviorSubject<any[]>([]);

	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.getData();
		Promise.resolve(() => {}).then(() => {
			this.mockData();
		});
	}

	public openDetail(item: any) {
		console.log('⬇️ This is 🌟  🌟 value start line ⬇️');
		console.log(item);
		console.log('⬆️ This is end ⬆️');
		const dialogRef = this.dialog.open(AppProductDetailModalComponent, {
			data: {
				product: item,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}

	private getData() {
		this.products$
			.pipe(
				delay(1000),
				finalize(() => {
					this.loadingDone = true;
				})
			)
			.subscribe((data: any[]) => {
				this.products = data;
			});
	}

	private mockData() {
		const data = [
			{
				title: 'Edith Dennis',
				desc: 'badly against arrange base pretty continued scientist for distance limited rocket science green little frame once brave began factor strength refused taught primitive carry',
				img: './assets/img/products-01.jpg',
				update: 'Last updated 3 mins ago',
			},
			{
				title: 'Charlie Klein',
				desc: 'several bend canal poet machine anybody current ago youth has letter weigh plate location improve helpful stronger deep stock salt sometime knowledge guide mad',
				img: './assets/img/products-02.jpg',
				update: 'Last updated 25 mins ago',
			},
			{
				title: 'Myra Stewart',
				desc: 'read noted store had keep spin mix transportation by universe smoke his avoid lungs important name sets floor easier memory fun log leaf slide',
				img: './assets/img/products-03.jpg',
				update: 'Last updated 32 mins ago',
			},
		];
		this.products$.next(data);
	}
}
