import { test, expect } from '@playwright/test';

test.describe('FORM LAYOUTS', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:4200/pages/forms/layouts")
    })

    test('Inline form', async ({ page }) => {
    // await page.goto("http://localhost:4200/pages/forms/layouts")
        await page.locator('input[placeholder="Jane Doe"]').fill('Evchen Wonderful')
        await page.locator('input[placeholder="Email"]').nth(0).fill('EvchenWonderful@Brilliance.com')
        await page.locator('span.custom-checkbox').nth(0).check()
        await page.locator('button[status="primary"]').nth(0).click()
        await page.pause()
    })
    test('Using the grid', async ({ page }) => {
    // await page.goto("http://localhost:4200/pages/forms/layouts")
        await page.locator('#inputEmail1').fill("Evchen@kukaryamba.com")
        await page.locator('#inputPassword2').fill("uzhasno")
        await page.locator('[class="inner-circle"]').nth(0).check();
        await page.locator('[class="inner-circle"]').nth(1).check();
        await page.locator('button[status="primary"]').nth(1).click()
    })




})

