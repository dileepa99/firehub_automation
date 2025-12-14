import { Page, expect } from "@playwright/test";

export class SingUpPage {
  constructor(public page: Page) {}

  get btnExplorePricing() {
    return this.page.getByRole("button", { name: "Explore Modules & Pricing" });
  }
  get getStartedFree() {
    return this.page.locator('//button[text()="Get Started Free"]');
  }
  get signUpPageLogo() {
    return this.page.locator('//img[@src="logo-full.svg"]');
  }
   get signUpPageIllustrationLogo() {
    return this.page.locator('//img[@src="signup-illustration.svg"]');
  }
  get signUpPageHeader() {
    return this.page.locator('//h1[text()="Intelligent Route Optimization"]');
  }
  get signUpPageText() {
    return this.page.locator('//p[text()="AI-powered algorithms provide the fastest, most fuel-efficient paths, saving time and reducing costs by up to 32%. Compatible with all popular map services."]');
  }
  get upTimeValue() {
    return this.page.locator('//span[text()="99"]');
  }
  get upTimeLabel() {
    return this.page.locator('//span[text()="Uptime"]');
  }
  get shipmentValue() {
    return this.page.locator('//span[text()="100"]');
  }
  get shipmentLabel() {
    return this.page.locator('//span[text()="Shipments"]');
  }
  get costReductionValue() {
    return this.page.locator('//span[text()="32"]');
  }
  get costReductionLabel() {
    return this.page.locator('//span[text()="Cost Reduction"]');
  }
  get signUpCompanyName() {
    return this.page.getByPlaceholder("Luminar works");
  }
  get signUpEmail() {
    return this.page.getByPlaceholder("your@email.com");
  }
  get signUpFirstName() {
    return this.page.getByPlaceholder("John");
  }
  get signUpLastName() {
    return this.page.getByPlaceholder("Doe");
  }
  get signUpPhone() {
    return this.page.locator('input[type="tel"]');
  }
  get signUpVerifyButton() {
    return this.page.getByRole("button", { name: "Verify" });
  }
  get signUpTermsCheckbox() {
    return this.page.getByLabel("I agree to the Terms of Service and Privacy Policy");
  }
  get signUpContinueButton() {
    return this.page.getByRole("button", { name: "Verify Phone to Continue" });
  }

  
  async openLandingPage() {
    await this.page.goto("https://qa.luminarworks.app/");
  }
  async goToPricingPage() {
    await this.btnExplorePricing.click();
  }
  async navigateToSignUpPage() {
    await this.getStartedFree.click();
  }
  async validateLogoAndTexts() {
    await expect(this.signUpPageLogo).toBeVisible();
    await expect(this.signUpPageIllustrationLogo).toBeVisible();
    await expect(this.signUpPageHeader).toBeVisible();
    await expect(this.signUpPageText).toBeVisible();
    await expect(this.upTimeValue).toBeVisible();
    await expect(this.upTimeLabel).toBeVisible();
    await expect(this.shipmentValue).toBeVisible();
    await expect(this.shipmentLabel).toBeVisible();
    await expect(this.costReductionValue).toBeVisible();
    await expect(this.costReductionLabel).toBeVisible();
  }

    async fillSignupForm() {
    await this.signUpCompanyName.fill("Automation Company");
    await this.signUpEmail.fill("automationcompany@email.com");
    await this.signUpFirstName.fill("John");
    await this.signUpLastName.fill("Doe");
    await this.signUpPhone.fill("777123456");
    //await this.signUpVerifyButton.click();
    await this.signUpTermsCheckbox.check();
    //await this.signUpContinueButton.click();
  }










  

}