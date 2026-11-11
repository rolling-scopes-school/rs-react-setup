import { test, expect } from '@playwright/test';

// Smoke test — proves the Playwright setup works end-to-end against the built app.
// Replace / expand with real user-journey specs as you build the app (see docs/TASK.md, Feature 9):
// add to cart, change quantity, the cart persists across navigation and reload, toggle the theme.
test('app loads and shows the starting heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /mini-shop/iu })).toBeVisible();
});
