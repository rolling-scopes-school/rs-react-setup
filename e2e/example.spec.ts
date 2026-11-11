import { test, expect } from '@playwright/test';

// Smoke test — proves the Playwright setup works end-to-end against the built app.
// Replace / expand with real user-journey specs as you build the app (see docs/TASK.md, Feature 9):
// open/close the modal (focus trap, ESC, focus returns), keyboard-navigate the
// combobox, switch tabs / accordion panels.
test('app loads and shows the starting heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /component kit/iu })).toBeVisible();
});
