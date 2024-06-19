import { Page, expect } from "@playwright/test";

export class Dropdown {
    public readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    get dropdownInput() {
        return '.header-container .appearance-outline'
    }

    get dropdownList() {
        return '.option-list nb-option'
    }

    get header() {
        return "nb-layout-header"
    }

    text = ['Light', 'Dark', 'Cosmic', 'Corporate']

    async interactWithDropdown() {
        await this.page.locator(this.dropdownInput).click()
        expect(this.page.locator(this.dropdownList)).toHaveText(this.text)
        expect(this.text).toHaveLength(4)
        // console.log(await this.page.locator(this.dropdownList).allTextContents())

        await this.page.locator(this.dropdownList).filter({ hasText: 'Dark' }).click()
        await expect(this.page.locator(this.header)).toHaveCSS('background-color', 'rgb(34, 43, 69)')

    }
}