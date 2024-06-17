import { test as it } from '@playwright/test'
/*
it.describe('FORM PAGE', () => {
    it.beforeAll(() => {
        console.log('before all tests')
    })

    it.beforeEach(() => {
        console.log('before each test')
    })

    it.afterEach(() => {
        console.log('after each test')
    })
        
    it.afterAll(() => {
        console.log('after all tests')
    })

    it('Test1', async ({ page }) => {
     
       console.log('test1')
    })
    it('Test2', async ({ page }) => {
     
       console.log('test2')
    })
})


*/



it.describe('FORM PAGE TYPE', () => {
    it('Fill all fields', async ({ page }) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")

        page.on('dialog', async dialog => { await dialog.accept() })
        await page.getByRole('button', { name: "Allow all" }).click();



        await page.locator('#name').fill('Evc')
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]')
            .pressSequentially('S@ch.com', { delay: 500 })



        await page.locator('input[placeholder="Password"]').fill('test123')
        await page.locator('[for="companyname"]~input[placeholder="Company"]').fill('LambdaTest')
        await page.selectOption('select[name="country"]', { label: 'Germany' })
        await page.locator('label:has-text("City*") ~ input#inputCity').fill('Freiburg')
        await page.getByPlaceholder('Address 1').fill('Himmel Strasse 11')
        await page.getByRole('textbox', { name: 'Address 2' }).fill('Am Wolke 7')
        await page.getByRole('textbox', { name: 'State*' }).fill('NRW')
        await page.getByRole('textbox', { name: 'Zip Code*' }).fill('51674')
    })
})
