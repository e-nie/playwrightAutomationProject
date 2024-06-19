import { test as it, expect } from "@playwright/test";
import { Dropdown } from "../../page_object/project/Dropdown";


it.describe("DROPDOWN", () => {
    it("should interact with dropdown", async ({ page }) => {
        let dropdown = new Dropdown(page);
        await page.goto('http://localhost:4200/pages/iot-dashboard')
        await dropdown.interactWithDropdown();
    })
});