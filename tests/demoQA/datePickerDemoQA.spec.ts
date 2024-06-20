import { test as it } from 'playwright/test';
import { DatePicker } from '../../page_object/demoQA/widgets/DatePickerDemoQA';


it.describe('Date Picker for demoQA', () => {
    it('working with date picker', async ({ page }) => {
        let datePicker = new DatePicker(page);
        await page.goto('https://demoqa.com/date-picker');

        await datePicker.verifyHeader();

    });






});