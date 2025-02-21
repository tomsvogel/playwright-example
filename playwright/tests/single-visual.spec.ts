import test, {expect} from '@playwright/test';

test('single element screenshot', async ({page}) => {
  //check for heading in the DOM
  await page.goto('/');
  await expect(page.locator('.text-lg').first()).toHaveScreenshot();
});
