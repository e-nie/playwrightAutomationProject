import { Page, expect } from "@playwright/test";

export class Form {
    page: Page;
    constructor({ page }) {
        this.page = page;
    }

    get header() {
        return "h1"
    }

    get firstName() {
        return '#firstname'
    }

    get lastName() {
        return '#lasttname'

    }


    get email() {
        return '#email'
    }

    get countryCodeDropdown() {
        return ('[class="control"] select')
    }

    get phoneNumber() {
        return '#Phno'
    }

    get addressLine1() {
        return '#Addl1'
    }

    get addressLine2() {
        return '#Addl2'
    }
    get state() {
        return '#state'
    }

    get postalCode() {
        return '#postalcode'
    }

    get countryDropdown() {
        return ('[class="control"] select')
    }

    get dateOfBirthInput() {
        return '#Date'
    }


    get male() {
        return '#male'

    }
    get female() {
        return '#female'

    }

    get trans() {
        return '#trans'

    }

    get agreeCheckBox() {
        return 'input[type="checkbox"]'
    }


    get submitButton() {
        return 'input[type="submit"]'
    }


    async verifyHeader() {
        const header = this.page.locator(this.header)
        await expect(header).toHaveText('Form');
    }
    async fillForm() {
        await this.page.fill(this.firstName, 'John')
        await this.page.fill(this.lastName, 'Doe')
        await this.page.fill(this.email, 'email')

        const countryCodeDropdownElement = this.page.locator(this.countryCodeDropdown).nth(0);

        await countryCodeDropdownElement.click();
        await countryCodeDropdownElement.selectOption({ value: '33' });
        await this.page.fill(this.phoneNumber, '1234567890')
        await this.page.fill(this.addressLine1, 'Molker Str. 12')
        await this.page.fill(this.addressLine2, 'Apartment 12')
        await this.page.fill(this.state, 'NRW')
        await this.page.fill(this.postalCode, '35037')

        const countryDropdownElement = this.page.locator(this.countryDropdown).nth(1);

        await countryDropdownElement.click();
        await countryDropdownElement.selectOption({ value: 'France' });

        await this.page.locator(this.dateOfBirthInput).click()
        await this.page.locator(this.male).check()
        await this.page.locator(this.female).check()
        await this.page.locator(this.trans).check()
        await this.page.locator(this.agreeCheckBox).check()
        await this.page.locator(this.submitButton).click()


    }
}