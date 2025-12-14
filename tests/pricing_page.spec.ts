import { test, expect } from "@playwright/test";
import { BasePage } from "C:/Projects/firehub_automation/firehub_automation/pages/base_page.ts";
import { PricingPage } from "C:/Projects/firehub_automation/firehub_automation/pages/pricing_page.ts";

test("Pricing Page", async ({ page }) => {
  const base = new BasePage(page);
  const pricing = new PricingPage(page);

  await base.openLandingPage();
  await base.goToPricingPage();

  await pricing.verifyPricingHeaders();
  
  await pricing.setSliderValue(14);
  await pricing.verifySliderValue("0.28");

  await pricing.setSliderValue(21);
  await pricing.verifySliderValue("0.42");

  await pricing.setSliderValue(28);
  await pricing.verifySliderValue("0.56");

  await pricing.setSliderValue(35);
  await pricing.verifySliderValue("0.7");

  await pricing.setSliderValue(42);
  await pricing.verifySliderValue("0.84");

  await pricing.setSliderValue(49);
  await pricing.verifySliderValue("0.98");

  await pricing.validateCuratedBundleTexts();

  await pricing.navigateToComparisonPage();

  await pricing.takeComparisonSectionScreenshot();
});
