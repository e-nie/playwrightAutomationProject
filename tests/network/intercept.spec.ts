import { test } from '@playwright/test';

test('Intercept Test', async ({ page }) => {
    await page.route('**\/*.{png,jpg,jpeg,svg}', (request) => {
        if (request.request().resourceType() === 'image') {
            request.abort()
        } else {
            request.continue()



        }

    })
    // await page.pause()
    await page.goto('https://amazon.com/')
    // await page.pause()
})

