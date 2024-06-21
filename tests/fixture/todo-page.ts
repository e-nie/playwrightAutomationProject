import { test as base } from '@playwright/test';
import { TodoPage } from './TodoPage';

type Fixture = {
    todoPage: TodoPage
}

export const test = base.extend<Fixture>({
    todoPage: async ({ page }, use) => {
        const todoPage = new TodoPage(page)
        await todoPage.goto()
        await todoPage.addTodoItem('Learn Playwright')
        await todoPage.addTodoItem('Learn Cypress')
        await todoPage.addTodoItem('Learn WebDriver')

        await use(todoPage)

        await todoPage.removeAllTodoItems()


    }
})

export { expect } from '@playwright/test'