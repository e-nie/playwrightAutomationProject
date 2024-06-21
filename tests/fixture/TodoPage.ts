import { Page } from "playwright/test";


export class TodoPage {
    public readonly page: Page

    /**
     * 
     * @param page {import("playwright/test").Page} - The page object to interact with
     */
    constructor(page: Page) {
        this.page = page;
    }


    get input() {
        return 'input.new-todo'
    }

    get todoItem() {
        return 'todo-item'
    }
    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/#/');
    }

    /**
     * 
     * @param title {string} - The todo item to add
     */
    async addTodoItem(title: string): Promise<void> {
        await this.page.locator(this.input).fill(title)
        await this.page.keyboard.press('Enter')
    }

    async removeTodoItem(title: string): Promise<void> {
        await this.page.locator(this.todoItem).click()
        const todo = this.page.getByTestId(this.todoItem).filter({ hasText: title })
        await todo.hover()
        await todo.getByLabel('Delete').click()
    }


    async removeAllTodoItems(): Promise<void> {
        while (await this.page.getByTestId(this.todoItem).count() > 0) {
            await this.page.getByTestId(this.todoItem).first().hover()
            await this.page.getByTestId(this.todoItem).first().getByLabel('Delete').click()
        }
    }
}