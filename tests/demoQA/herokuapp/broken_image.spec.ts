import { test as it } from '@playwright/test'


it('should load broken images', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images')

    await page.route('**/*', route => {
        route.continue().catch(() => { })
    })

    const image = await page.evaluate(async () => {
        const brokenImages = Array.from(document.querySelectorAll('img'))
        const arrayOfBrokenImages = []

        for (const img of brokenImages) {
            //here we catch the error and return null if the image is broken
            const response = await fetch(img.src).catch(() => null)
            //if the response is null or the status is not 200, we push the src to the array, we can remove the response.status !== 200 or !response if we want to check for all images
            // if (!response || response.status !== 200 || img.naturalWidth === 0 || img.naturalHeight === 0) {
            if (img.naturalWidth === 0 || img.naturalHeight === 0) {
                arrayOfBrokenImages.push(img.src)
            }

        }
        return arrayOfBrokenImages
    })
    console.log(image.length, 'length')
    for (const src of image) {
        console.log(src, 'src')
    }

})
