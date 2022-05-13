import { ListPage } from './product-list.po';
import { browser } from 'protractor';

describe('Protractor test demo for list', function () {
	let page: ListPage;

	beforeEach(() => {
		page = new ListPage();
	});

	it('should display a list of product', async () => {
		await page.navigateTo();
		expect(await page.getProductCardElements().count()).toBe(3);
	});

	it('should open and view a particular product', async () => {
		await page.navigateTo();
		await page.getFirsProductCardElement().click();

		expect(page.getOpenModalElement()).toBeTruthy();
		expect(await page.getOpenModalHeadingElement().getText()).toBe(
			'Edith Dennis'
		);
	});
});
