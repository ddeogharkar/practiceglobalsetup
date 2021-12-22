import test from "@playwright/test";

test("practice", async ({ page }) => {
  console.log(await page.title());
})