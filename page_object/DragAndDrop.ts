
import { Page, expect } from "@playwright/test";

export class DragAndDrop {
    readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    get dragElement() {
        return '[draggable="true"]'
    }

    get dropHereElement() {
        return '#mydropzone'
    }

    get dropList() {
        return '#droppedlist'

    }

    public async dragAndDropElement(text: string) {
        const dragTo = this.page.locator(this.dropHereElement)
        await this.page.locator(this.dragElement, { hasText: text }).dragTo(dragTo)
        expect(await this.page.locator(this.dropList).textContent()).toContain(text)
    }
    //step-by-step
    public async DragAndDropElementOption2(text: string) {
        await this.page.locator(this.dragElement, { hasText: text }).hover()
        await this.page.mouse.down()
        await this.page.locator(this.dropHereElement).hover()
        await this.page.mouse.up()
        expect(await this.page.locator(this.dropList).textContent()).toContain(text)
    }
}