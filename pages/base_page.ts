import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(public page: Page) {}

  // NAVIGATION BAR
  get logo() {
    return this.page.locator('img[alt="luminar works logo"]');
  }
  get navHome() {
    return this.page.getByText("Home");
  }
  get navProducts() {
    return this.page.getByText("Products");
  }
  get navAPI() {
    return this.page.getByText("API");
  }
  get navPricing() {
    return this.page.locator("//span[text()='Pricing']");
  }
  get navFAQ() {
    return this.page.getByText("FAQ");
  }
  get btnGetStartedNav() {
    return this.page.getByText("Get Started");
  }
  
  // HERO AREA CONTENT
  get titleEnterprise() {
    return this.page.getByText("Enterprise Power.");
  }
  get titlePricingForEveryone() {
    return this.page.getByText("Price for Everyone.");
  }
  get statUptime() {
    return this.page.getByText("99% Uptime");
  }
  get statShipments() {
    return this.page.getByText("100M+ Shipments");
  }
  get statCost() {
    return this.page.getByText("32% Cost Reduction");
  }

  // MAIN CTA BUTTONS
  get btnLuminarStarter() {
    return this.page.getByRole("button", { name: "Luminar Starter" });
  }
  get btnExplorePricing() {
    return this.page.getByRole("button", { name: "Explore Modules & Pricing" });
  }

  // PAGE METHODS
  async openLandingPage() {
    await this.page.goto("https://qa.luminarworks.app/");
  }
  async verifyLandingPageElements() {
    await expect(this.logo).toBeVisible();
    await expect(this.navHome).toBeVisible();
    await expect(this.navProducts).toBeVisible();
    await expect(this.navAPI).toBeVisible();
    await expect(this.navPricing).toBeVisible();
    await expect(this.navFAQ).toBeVisible();

    await expect(this.btnLuminarStarter).toBeVisible();
    await expect(this.btnExplorePricing).toBeVisible();
  }
  async goToPricingPage() {
    await this.btnExplorePricing.click();
  }
}
