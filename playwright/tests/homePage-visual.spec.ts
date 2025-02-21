import test, {expect} from '@playwright/test';

test('home page screenshot matched', async ({page}) => {
  //check for heading in the DOM
  await page.goto('/');
  await expect(page).toHaveScreenshot('homepage');
});
