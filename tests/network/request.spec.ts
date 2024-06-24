import { test } from '@playwright/test';

test('request failed Test', async ({ page }) => {
    await page.route('**\/*.{png,jpg,jpeg,svg}', (cb) => {
        if (cb.request().resourceType() === 'image') {
            cb.abort()
        } else {
            cb.continue()
        }
    })
    page.on('requestfailed', req => {
        console.log(`error: ${req.url()}`)
    })

    // await page.goto('data:text/html, <script>throw new Error("This is a test error")</script>')
    await page.pause()
    await page.goto('https://demoqa.com')
    await page.pause()
})
