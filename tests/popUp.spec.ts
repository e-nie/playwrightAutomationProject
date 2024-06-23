import { test, expect } from '@playwright/test';


test.describe('POPUP WINDOW', () => {

    test('popUp window  confirm test', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', async dialog => dialog.accept())
        await page.locator('#confirmbtn').click()
    })

    test('popUp window  dismiss test', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
        page.on('dialog', async dialog => dialog.dismiss())
        await page.locator('#confirmbtn').click()
    })
})