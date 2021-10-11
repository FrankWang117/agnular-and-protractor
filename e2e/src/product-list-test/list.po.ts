import { browser, element, by, Key } from 'protractor';

export class ListPage {
	async navigateTo() {
		return await browser.get('/products');
	}

	getProductCardElements() {
		return element.all(by.css('.page-section'));
	}

	getFirsProductCardElement() {
		return element(by.css('.page-section'));
	}

	getOpenModalElement() {
		return element(by.tagName('app-product-detail-modal'));
	}

	getOpenModalHeadingElement() {
		return element(by.css('app-product-detail-modal h1'));
	}
	// 键盘事件
	// selectNextKey() {
	// 	browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
	// }

	// selectPrevKey() {
	// 	browser.actions().sendKeys(Key.ARROW_LEFT).perform();
	// }

	// selectEscapeKey() {
	// 	browser.actions().sendKeys(Key.ESCAPE).perform();
	// }
}
