import { test as it } from 'playwright/test';
import { Form } from '../../page_object/letcode/Form';

it.describe('Form for letcode', () => {
    it('working with form', async ({ page }) => {
        let form = new Form({ page });
        await page.goto('https://letcode.in/forms');
        await form.verifyHeader();
        await form.fillForm();
    });
})                                                                           