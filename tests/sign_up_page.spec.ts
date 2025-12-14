import { test, expect } from "@playwright/test";
import { BasePage } from "C:/Projects/firehub_automation/firehub_automation/pages/base_page.ts";
import { PricingPage } from "C:/Projects/firehub_automation/firehub_automation/pages/pricing_page.ts";
import { SingUpPage } from "C:/Projects/firehub_automation/firehub_automation/pages/sign_up_page.ts";

test("SignUp Page", async ({ page }) => {
  const base = new BasePage(page);
  const pricing = new PricingPage(page);
  const signup = new SingUpPage(page);

  await base.openLandingPage();
  await base.goToPricingPage();
  await signup.navigateToSignUpPage();
  await signup.validateLogoAndTexts();
  await signup.fillSignupForm();
});