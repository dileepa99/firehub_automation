import { test, expect } from "@playwright/test";
import { PricingPage } from "../pages/PricingPage";


test.describe('Smoke Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://qa.luminarworks.app');
  });

test("Pricing Page Complete Validation", async ({ page }) => {
  //await expect(page).toHaveTitle(/FireHub/i);

  const pricing = new PricingPage(page);
  await pricing.verifyPricingPage();
  
});

})
