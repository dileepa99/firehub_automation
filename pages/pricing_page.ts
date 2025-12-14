import { Page, expect } from "@playwright/test";

export class PricingPage {
  constructor(public page: Page) {}

  // HEADERS (getters)
  get headerPricingThat() {
    return this.page.locator("text=Pricing That");
  }
  get headerScalesWithYou() {
    return this.page.locator("text=Scales With You");
  }
  get headerNoHiddenFees() {
    return this.page.locator("text=No hidden fees.");
  }

  // SLIDER ELEMENTS (getters)
  get sliderThumb() {
    return this.page.locator('[data-slot="slider-thumb"]');
  }
  get sliderTrack() {
    return this.page.locator('[data-slot="slider-track"]');
  }

  // HEADER VALIDATION
  async verifyPricingHeaders() {
    await expect(this.headerPricingThat).toBeVisible();
    await expect(this.headerScalesWithYou).toBeVisible();
    await expect(this.headerNoHiddenFees).toBeVisible();
  }

  async setSliderValue(value: number) {
    const thumb = this.sliderThumb;
    const track = this.sliderTrack;

    await thumb.click();   // <-- this was in your old code

    await thumb.waitFor({ state: 'visible' });

    const thumbBox = await thumb.boundingBox();
    const trackBox = await track.boundingBox();

    if (!thumbBox || !trackBox) throw new Error("Slider not found");

    const min = 0;
    const max = 100;

    const percentage = (value - min) / (max - min);
    const targetX = trackBox.x + trackBox.width * percentage;
    const centerY = thumbBox.y + thumbBox.height / 2;

    // EXACT DRAG LOGIC YOU USED
    await this.page.mouse.move(thumbBox.x + thumbBox.width / 2, centerY);
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, centerY, { steps: 100 });
    await this.page.mouse.up();
  }

  async verifySliderValue(text: string) {
    await expect(this.page.locator(`text=${text}`)).toBeVisible();
  }
}

