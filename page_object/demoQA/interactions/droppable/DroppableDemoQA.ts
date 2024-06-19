import { DragAndDrop } from './../../../DragAndDrop';
import { Page, expect } from "@playwright/test";

export class Droppable {
    constructor(public readonly page: Page) {
        this.page = page;
    }
    get draggedElement() {
        return '#draggable'
    }


    get dropHere() {
        return '#droppable'
    }




    async open() {
        await this.page.goto('https://demoqa.com/droppable');
    }

    async DragAndDropToTheElement() {
        await this.page.locator(this.draggedElement).dragTo(this.page.locator(this.dropHere).nth(0))
        expect(await this.page.locator(this.dropHere).nth(0).textContent()).toBe('Dropped!')
        expect(await this.page.locator(this.dropHere).nth(0)).toHaveCSS('background-color', 'rgb(70, 130, 180)')
    }
}

// https://demoqa.com/droppable