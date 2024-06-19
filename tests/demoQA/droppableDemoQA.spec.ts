import { test } from "@playwright/test";
import { Droppable } from "../../page_object/demoQA/interactions/droppable/DroppableDemoQA";

test.describe("DROPPABLE", () => {
    test("should drag and drop", async ({ page }) => {
        let droppable = new Droppable(page);
        await droppable.open();
        await droppable.DragAndDropToTheElement();
    });
})   