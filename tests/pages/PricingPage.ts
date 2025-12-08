

import { expect, Page } from "@playwright/test";




export class PricingPage {
  constructor(private page: Page) {}

  async verifyPricingPage() {
    const page = this.page;

    // Navigation
    await page.locator('text=Get Started').click();
    await page.locator('text=Explore Modules & Pricing').click();

    // Header validation
    await expect(page.locator("text=Pricing That")).toBeVisible();
    await expect(page.locator("text=Scales With You")).toBeVisible();
    await expect(
      page.locator("text=No hidden fees. No surprises. Cancel anytime.")
    ).toBeVisible();

    // ----------- INTERNAL SLIDER METHOD (NO ERRORS) -----------
    const setSliderValue = async (value: number) => {
      const thumb = page.locator('[data-slot="slider-thumb"]');
      const track = page.locator('[data-slot="slider-track"]');
      

      await thumb.waitFor({ state: "visible" });

      const box = await track.boundingBox();
      if (!box) throw new Error("Slider track not found");

      const stepWidth = box.width / 50;
      const x = box.x + stepWidth * value;

      await page.mouse.move(box.x + 1, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(x, box.y + box.height / 2);
      await page.mouse.up();
    };
    // -----------------------------------------------------------

    // Slider validations
    //await setSliderValue(7);
   // await expect(page.locator("text=0.14")).toBeVisible();

    await setSliderValue(14);
    await expect(page.locator("text=0.28")).toBeVisible();

    await setSliderValue(21);
    await expect(page.locator("text=0.42")).toBeVisible();

    await setSliderValue(28);
    await expect(page.locator("text=0.56")).toBeVisible();

    await setSliderValue(35);
    await expect(page.locator("text=0.7")).toBeVisible();

    await setSliderValue(42);
    await expect(page.locator("text=0.84")).toBeVisible();

    await setSliderValue(49);
    await expect(page.locator("text=0.98")).toBeVisible();

    // Bundles
    await expect(page.locator("text=Launch")).toBeVisible();
    await expect(
      page.locator(
        "text=For teams with simple needs — streamline planning and efficiency."
      )
    ).toBeVisible();
    await expect(page.locator("text=$23.50")).toBeVisible();

    await expect(page.locator("text=Momentum")).toBeVisible();
    await expect(
      page.locator(
        "text=For skill-based operations — optimize scheduling to improve service."
      )
    ).toBeVisible();

    await expect(page.locator("text=Acceleration")).toBeVisible();
    await expect(
      page.locator(
        "text=For complex operations — manage trips, capacity, and service rules."
      )
    ).toBeVisible();
    await expect(page.locator("text=$29")).toBeVisible();
  }
}
