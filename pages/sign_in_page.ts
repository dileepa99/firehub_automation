 import { Page, expect } from "@playwright/test";

export class SignInPage {
  constructor(public page: Page) {}

  get luminarStarterButton() {
    return this.page.locator('//button[text()="Luminar Starter"]');
  }
  get signInLink() {
    return this.page.locator('//button[text()="Sign in"]');
  }
  get userName() {
    return this.page.locator('//input[@id="username"]');
  }
  get userPassword() {
    return this.page.locator('//input[@id="password"]');
  }
  get signInButton() {
    return this.page.locator('//input[@name="login"]');
  }
 
 
  async openLandingPage() {
    await this.page.goto("https://qa.luminarworks.app/");
  }
  async clickOnLuminarStarterButton() {
    await this.luminarStarterButton.click();
  }
  async clickOnSignInLink() {
    await this.signInLink.click();
  }
  async fillUsername() {
    await this.userName.fill("muhammadra@sunstonels.com");
  }
  async fillPassword() {
    await this.userPassword.fill("Password123");
  }
  async clickSignInButton() {
    await this.signInButton.click();
  }

}