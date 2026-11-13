import { test, expect } from '@playwright/test';

// Smoke test — proves the Playwright setup works end-to-end against the production server.
// Replace / expand with real user-journey specs as you build the app (see TASK.md, Feature 11):
// switch the locale, navigate across server-rendered routes, search via a server action, export CSV.
test('app loads and shows the starting heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /next\.js ssr \/ ssg/iu })).toBeVisible();
});
