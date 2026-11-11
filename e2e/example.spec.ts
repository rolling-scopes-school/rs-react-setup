import { test, expect } from '@playwright/test';

// Smoke test — proves the Playwright setup works end-to-end against the built app.
// Replace / expand with real user-journey specs as you build the app (see docs/TASK.md, Feature 8):
// fill + submit each form, see validation errors, upload an image, check the new
// card and its highlight.
test('app loads and shows the starting heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /form playground/iu })).toBeVisible();
});
