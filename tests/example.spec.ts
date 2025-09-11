import { test, expect } from '@playwright/test';

test('homepage loads and shows title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/React App/i);

  // Optional: check for an element
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Welcome to React');
});
