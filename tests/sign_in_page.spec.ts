import { test, expect } from "@playwright/test";
import { BasePage } from "C:/Projects/firehub_automation/firehub_automation/pages/base_page.ts";
import { SignInPage } from "C:/Projects/firehub_automation/firehub_automation/pages/sign_in_page.ts";

test("SignIn Page", async ({ page }) => {
  const base = new BasePage(page);
  const signin = new SignInPage(page);

  await base.openLandingPage();
  await signin.clickOnLuminarStarterButton();
  await signin.clickOnSignInLink();
  await signin.fillUsername();
  await signin.fillPassword();
  await signin.clickSignInButton();
});
