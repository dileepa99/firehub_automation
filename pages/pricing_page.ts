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

  // CURATED BUNDLES HEADERS H3
  get launchCard() {
    return this.page.locator('div[data-slot="card"]').filter({
      hasText: "Launch"
    });
  }
  get launchTitle() {
    return this.launchCard.getByRole("heading", { name: "Launch" });
  }
  get momentumCard() {
    return this.page.locator('div[data-slot="card"]').filter({
      hasText: "Momentum"
    });
  }
  get momentumTitle() {
    return this.momentumCard.getByRole("heading", { name: "Momentum" });
  }
  get accelerationCard() {
    return this.page.locator('div[data-slot="card"]').filter({
      hasText: "Acceleration"
    });
  }
  get accelerationTitle() {
    return this.accelerationCard.getByRole("heading", { name: "Acceleration" });
  }

  // CURATED BUNDLES PARAGRAPH DESCRIPTION
getBundleDescriptionForLaunch(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//p[contains(@class,'text-muted-foreground')]`
  );
}
getBundleDescriptionForMomentum(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Momentum']]//p[contains(@class,'text-muted-foreground')]`
  );
}
getBundleDescriptionForAcceleration(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//p[contains(@class,'text-muted-foreground')]`
  );
}

// CUATED BUNDLE MONTHLY SUBSCRIPTION PRICES
getBundlePreviousPriceForLaunch(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//div[@class='line-through' and contains(., 'Was $25/mo')]`
  );
}
getBundleCurrentPriceForLaunch(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//span[@class='text-4xl font-bold leading-none' and contains(., '$23.50')]`
  );
}
getBundlePreviousPricenForMomentum(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Momentum']]//div[@class='line-through' and contains(., 'Was $27/mo')]`
  );
}
getBundleCurrentPricenForMomentum(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Momentum']]//span[@class='text-4xl font-bold leading-none' and contains(., '$25')]`
  );
}
getBundlePreviousPriceForAcceleration(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//div[@class='line-through' and contains(.,'Was $33/mo')]`
  );
}
getBundleCurrentPriceForAcceleration(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//span[@class='text-4xl font-bold leading-none' and contains(.,'$29')]`
  );
}

// CURATED BUNDLE PRICE FOR ADDITIONAL RESOURCES
getAdditionalResourceLaunch(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//p[@class='mt-4 font-semibold text-center' and contains(., '$2 per additional vehicle/month')]`
  );
}
getAdditionalResourceMomentum(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Momentum']]//p[@class='mt-4 font-semibold text-center' and contains(., '$2 per additional resource/month')]`
  );
}
getAdditionalResourceAcceleration(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//p[@class='mt-4 font-semibold text-center' and contains(., '$2 per additional vehicle/month')]`
  );
}

//LAUNCH PLAN POINTS
getLaunchPlanItemOne(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//span[@class='text-base' and contains(., 'Smart Planning')]`
  );
}
getLaunchPlanItemTwo(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//span[@class='text-base' and contains(., 'Multiple Size Dimensions')]`
  );
}
getLaunchPlanItemThree(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Launch']]//span[@class='text-base' and contains(., 'Mobile app access')]`
  );
}

//MOMENTUM PLAN POINTS
getMomentumPlanItemOne(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Momentum']]//span[@class='text-base' and contains(., 'Smart Planning')]`
  );
}
getMomentumPlanItemTwo(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Momentum']]//span[@class='text-base' and contains(., 'Smart Constraints')]`
  );
}

//ACCELERATION PLAN POINTS
getAccelerationPlanItemOne(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//span[@class='text-base' and contains(., 'Smart Planning')]`
  );
}
getAccelerationPlanItemTwo(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//span[@class='text-base' and contains(., 'Smart Constraints')]`
  );
}
getAccelerationPlanItemThree(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//span[@class='text-base' and contains(., 'Multiple Size Dimensions')]`
  );
}
getAccelerationPlanItemFour(name: string) {
  return this.page.locator(
    `//div[@data-slot='card'][.//h3[normalize-space()='Acceleration']]//span[@class='text-base' and contains(., 'Multiday Planning')]`
  );
}

// COMPARE MODULES
get compareModules() {
    return this.page.locator('//button[text()="Compare Modules"]')};
  
  // HEADER VALIDATION
  async verifyPricingHeaders() {
    await expect(this.headerPricingThat).toBeVisible();
    await expect(this.headerScalesWithYou).toBeVisible();
    await expect(this.headerNoHiddenFees).toBeVisible();
  }

  //CURATED BUNDLES TEXT VALIDATION
  async validateCuratedBundleTexts() {
  await expect(this.launchTitle).toBeVisible();
  await expect(this.momentumTitle).toBeVisible();
  await expect(this.accelerationTitle).toBeVisible();

  await expect(this.getBundleDescriptionForLaunch("Launch")).toBeVisible();
  await expect(this.getBundleDescriptionForMomentum("Momentum")).toBeVisible();
  await expect(this.getBundleDescriptionForAcceleration("Acceleration")).toBeVisible();

  await expect(this.getBundlePreviousPriceForLaunch("Launch")).toBeVisible();
  await expect(this.getBundleCurrentPriceForLaunch("Launch")).toBeVisible();
  await expect(this.getBundlePreviousPricenForMomentum("Momentum")).toBeVisible();
  await expect(this.getBundleCurrentPricenForMomentum("Momentum")).toBeVisible();
  await expect(this.getBundlePreviousPriceForAcceleration("Acceleration")).toBeVisible();
  await expect(this.getBundleCurrentPriceForAcceleration("Acceleration")).toBeVisible();

  await expect(this.getAdditionalResourceLaunch("Launch")).toBeVisible();
  await expect(this.getAdditionalResourceMomentum("Momentum")).toBeVisible();
  await expect(this.getAdditionalResourceAcceleration("Acceleration")).toBeVisible();
  
  await expect(this.getLaunchPlanItemOne("Launch")).toBeVisible();
  await expect(this.getLaunchPlanItemTwo("Launch")).toBeVisible();
  await expect(this.getLaunchPlanItemThree("Launch")).toBeVisible();

  await expect(this.getMomentumPlanItemOne("Momentum")).toBeVisible();
  await expect(this.getMomentumPlanItemTwo("Momentum")).toBeVisible();

  await expect(this.getAccelerationPlanItemOne("Acceleration")).toBeVisible();
  await expect(this.getAccelerationPlanItemTwo("Acceleration")).toBeVisible();
  await expect(this.getAccelerationPlanItemThree("Acceleration")).toBeVisible();
  await expect(this.getAccelerationPlanItemFour("Acceleration")).toBeVisible();
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

  async navigateToComparisonPage() {
    await this.compareModules.click();
  }

  async takeComparisonSectionScreenshot() {
  await this.page.waitForTimeout(2000);
  const section = this.page.locator("//div[contains(@class,'max-w-7xl') and contains(@class,'flex-col')]");
  await section.scrollIntoViewIfNeeded();
  await section.screenshot({
    path: "comparison-section.png"
  });
}

}

