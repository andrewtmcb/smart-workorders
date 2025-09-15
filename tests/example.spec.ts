import { test, expect } from '@playwright/test';

test('homepage loads and shows the correct content', async ({ page }) => {
  // Go to the homepage of the application.
  await page.goto('/');

  // Expect the main heading to match the one in the App.jsx component.
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Welcome!');

  // Optional: Take a screenshot to verify the page's appearance.
  // await page.screenshot({ path: 'screenshot.png' });
});
