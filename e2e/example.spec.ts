import { test, expect } from '@playwright/test';

// Smoke test — proves the Playwright setup works end-to-end against the built app.
// Replace / expand with real user-journey specs as you build the app (see docs/TASK.md, Feature 9):
// search + paginate, open a cached detail, manual refresh, loading and error states
// (stub the GitHub API with page.route).
test('app loads and shows the starting heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /github explorer/iu })).toBeVisible();
});
