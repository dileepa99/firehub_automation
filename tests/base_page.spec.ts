import { test } from "@playwright/test";
import { BasePage } from "C:/Projects/firehub_automation/firehub_automation/pages/base_page.ts";

test("Landing/ Base Page", async ({ page }) => {
  const base = new BasePage(page);

  await base.openLandingPage();
  await base.verifyLandingPageElements();
});
