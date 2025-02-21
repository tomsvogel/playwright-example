import {test, expect} from '@playwright/test';

test('text snapshot playwright hero title', async ({page}) => {
  await page.goto('https://playwright.dev');
  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
});
