const { test, expect } = require('@playwright/test');

test('should be able to send a GET method', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});
