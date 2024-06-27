import { test, expect } from '@playwright/test';

const url = 'https://reqres.in/'
test.describe('API REQUESTS', () => {
    test('testing GET request', async ({ request }) => {
        //get single user
        const res = await request.get(`${url}api/users/2`)
        // console.log(res, 'response')
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'response body')
        // expect(resBody.data.id, `Id should be ${resBody.data.id}`)
        expect(resBody.data.id).toBe(2)
        expect(resBody.data.email).toBe('janet.weaver@reqres.in')
    })

    test('testing POST request - CREATE', async ({ request }) => {
        //get single user
        const res = await request.post(`${url}api/user`, {
            data: {
                name: 'morpheus',
                job: 'leader'
            }
        })
        console.log(res, 'response')
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'Response Body')
    })

    test('testing POST request - REGISTER', async ({ request }) => {
        //get single user
        const res = await request.post(`${url}api/register`, {
            data: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
        console.log(res, 'response')
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'Response Body')
        expect(resBody.id).toBe(4)
    })

    test('testing PUT request - UPDATE', async ({ request }) => {
        //get single user
        const res = await request.put(`${url}api/users/2`, {
            data: {
                "email": "evchen.nie@sonsuz.uk",
                "password": "blissful"
            }
        })
        console.log(res, 'response')
        const resBody = JSON.parse(await res.text())
        console.log(resBody, 'Response Body')
        expect(resBody.email).toBe('evchen.nie@sonsuz.uk')
    })


    test.skip('testing DELETE user  ', async ({ request }) => {
        //get single user
        const res = await request.delete(`${url}api/users/2`)
        console.log(res, 'response')
        expect(res.status()).toBe(204)
        const resBody = await res.text()
        console.log(resBody, 'Response Body')

    })

    //patch request works incorrectly!!!!
    test('testing PATCH request for user  ', async ({ request }) => {
        //get single user
        const res = await request.patch(`${url}api/users/4`, {
            data: {
                "name": "morpheus",
                "job": "zion resident"
            }
        })

        console.log(res, 'response')
        expect(res.status()).toBe(200)
        const resBody = await JSON.parse(await res.text())
        console.log(resBody, 'Response Body')
        expect(resBody.job).toBe('zion resident')   

    })
})