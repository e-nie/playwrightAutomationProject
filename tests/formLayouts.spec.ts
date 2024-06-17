import { test, expect } from '@playwright/test';
 
test.describe('FORM LAYOUTS', () => { 


    test('Fill all fields', async ({ page }) => {
        await page.goto("http://localhost:4200/pages/forms/layouts")
        await page.locator('input[placeholder="Jane Doe"]').fill('Evchen Wonderful')
        await page.locator('input[placeholder="Email"]').nth(0).fill('EvchenWonderful@Brilliance.com')
        await page.locator('span.custom-checkbox').nth(0).check()
        await page.locator('button[status="primary"]').nth(0).click()
        await page.locator('#inputEmail1').fill("Evchen@kukaryamba.com")
        await page.locator('#inputPassword2').fill("uzhasno")
        // await page.locator('[class^="native-input"][type="radio"]').first().check();
    })
    })