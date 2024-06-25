// import { test as it } from "@playwright/test";
// import { DatePicker } from "../../page_object/DatePicker";





// it.describe("Date Picker", () => { 
//     it('working with date picker', async ({ page }) => {
//         let datePicker = new DatePicker(page);
//         await page.goto('https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo');

//         page.on('dialog', async dialog => { await dialog.accept() })
//         await page.getByRole('button', { name: "Allow all" }).click();

//         await datePicker.verifyHeader();  
//         await datePicker.dateFromToday();
//     })
// });