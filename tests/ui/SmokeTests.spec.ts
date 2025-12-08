import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

// Slider helper function
async function setSliderValue(page: Page, value: number) {

  const thumb = page.locator('[data-slot="slider-thumb"]');
  const track = page.locator('[data-slot="slider-track"]');

  // Wait for slider to appear
  await thumb.waitFor({ state: 'visible' });

  const thumbBox = await thumb.boundingBox();
  const trackBox = await track.boundingBox();

  if (!thumbBox || !trackBox) throw new Error("Slider not found");

  const min = 0;
  const max = 100;

  // calculate the target X based on track widths
  const percentage = (value - min) / (max - min);
  const targetX = trackBox.x + trackBox.width * percentage;
  const centerY = thumbBox.y + thumbBox.height / 2;

  // Drag from current thumb center to target
  await page.mouse.move(thumbBox.x + thumbBox.width / 2, centerY);
  await page.mouse.down();
  await page.mouse.move(targetX, centerY, { steps: 100 });
  await page.mouse.up();
}


test.describe('Smoke Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://qa.luminarworks.app');
  });

  test('Load the Luminar works app load and home page - Smoke TC-548 and TC-549', async ({ page }) => {
    //VAlidate page title
    await expect(page).toHaveTitle(/FireHub/i);

    //Validate the top navigation
    await expect(page.locator('img[alt="luminar works logo"]')).toBeVisible();
    await expect(page.locator("text=Home")).toBeVisible();
    await expect(page.locator("text=Products")).toBeVisible();
    await expect(page.locator("text=API")).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect(page.locator("text=FAQ")).toBeVisible();
    await expect(page.locator("text=Get Started")).toBeVisible();
    
    //Validate statics
    await expect(page.locator("text=99")).toBeVisible();
    await expect(page.locator("text=Uptime")).toBeVisible();
    await expect(page.locator("text=100")).toBeVisible();
    await expect(page.locator("text=Shipments")).toBeVisible();
    await expect(page.locator("text=32")).toBeVisible();
    await expect(page.locator("text=Cost Reduction")).toBeVisible();

    //Validate hero section
    await expect(page.locator("text=Logistics software, democratized.")).toBeVisible();
    await expect(page.locator("text=Enterprise Power.")).toBeVisible();
    await expect(page.locator("text=Price for Everyone.")).toBeVisible();
    await expect(page.locator("text=Zero Complexity.")).toBeVisible();
    await expect(page.locator("text=Route planning to proof of delivery, for free to enterprises.")).toBeVisible();

    // Hover over the "Products" menu item
    await page.getByRole('button', { name: 'Products' }).hover();
      
    // Validate drop-down items
    await expect(page.getByRole('link', { name: 'Route Optimization' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Live Tracking' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Performance Analytics' })).toBeVisible();




 });



   test('Check the navigation of the two CTA buttons - Starter and Pricing - Smoke TC-550', async ({ page }) => {
    //VAlidate page title
    await expect(page).toHaveTitle(/FireHub/i);


    // Navigate to pricing page through buttons
    await page.locator('text=Get Started').click();
    await page.locator('text=Explore Modules & Pricing').click();

    // Validate pricing page
    await expect(page.locator("text=Pricing That")).toBeVisible();
    await expect(page.locator("text=Scales With You")).toBeVisible();
    await expect(page.locator("text=No hidden fees. No surprises. Cancel anytime.")).toBeVisible();

    //Validation of dicount amounts corresponding to number of vehicles
    await page.locator('span[role="slider"][data-slot="slider-thumb"]').click();
    await setSliderValue(page, 7);
    await expect(page.locator("text=0.14")).toBeVisible();
    await setSliderValue(page, 14);
    await expect(page.locator("text=0.28")).toBeVisible();
    await setSliderValue(page, 21);
    await expect(page.locator("text=0.42")).toBeVisible();
    await setSliderValue(page, 28);
    await expect(page.locator("text=0.56")).toBeVisible();
    await setSliderValue(page, 35);
    await expect(page.locator("text=0.7")).toBeVisible();
    await setSliderValue(page, 42);
    await expect(page.locator("text=0.84")).toBeVisible();
    await setSliderValue(page, 49);
    await expect(page.locator("text=0.98")).toBeVisible();

    //Curated Bundles - Launch
    await expect(page.locator("text=Launch")).toBeVisible();
    await expect(page.locator("text=For teams with simple needs — streamline planning and efficiency.")).toBeVisible();
    await expect(page.locator("text=$23.50")).toBeVisible();

    //Curated Bundles - Momentum
    await expect(page.locator("text=Momentum")).toBeVisible();
    await expect(page.locator("text=For skill-based operations — optimize scheduling to improve service.")).toBeVisible();
   // await expect(page.locator("text=$25")).toBeVisible();

    //Curated Bundles - Acceleration
    await expect(page.locator("text=Acceleration")).toBeVisible();
    await expect(page.locator("text=For complex operations — manage trips, capacity, and service rules.")).toBeVisible();
    await expect(page.locator("text=$29")).toBeVisible();
    
    // //Free - Luminar Starter
    // await expect(page.locator("text=Luminar Starter")).toBeVisible();
    // await expect(page.locator("text=")).toBeVisible();
    // await expect(page.locator("text=0")).toBeVisible();
    // await expect(page.locator("text=Max 5 resources")).toBeVisible();
    // await expect(page.locator("text=Drag-and-drop planning")).toBeVisible();
    // await expect(page.locator("text=Lite mobile execution")).toBeVisible();
    
    // //Free - Bundle 2
    // await expect(page.locator("text=Bundle 2")).toBeVisible();
    // await expect(page.locator("text=")).toBeVisible();
    // await expect(page.locator("text=99.99")).toBeVisible();
    // await expect(page.locator("text=per month")).toBeVisible();
    // await expect(page.locator("text=Unlimited vehicles")).toBeVisible();
    // await expect(page.locator("text=Dedicated account manager")).toBeVisible();
    // await expect(page.locator("text=Custom integrations")).toBeVisible();

    // //Free - Bundle 3
    // await expect(page.locator("text=Bundle 3")).toBeVisible();
    // await expect(page.locator("text=")).toBeVisible();
    // await expect(page.locator("text=99.99")).toBeVisible();
    // await expect(page.locator("text=per month")).toBeVisible();
    // await expect(page.locator("text=Unlimited vehicles")).toBeVisible();
    // await expect(page.locator("text=Dedicated account manager")).toBeVisible();
    // await expect(page.locator("text=Custom integrations")).toBeVisible();





  });

/*
   test('Check Get Started button - Smoke TC-551', async ({ page }) => {
    //VAlidate page title
    await expect(page).toHaveTitle(/FireHub/i);
  //This is currently block due to page is not loading
*/

});



