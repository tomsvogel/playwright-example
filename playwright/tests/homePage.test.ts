import test, {expect} from 'playwright/test';

//execute 'yarn playwright install' before executing tests to install browsers
//to correctly start tests execute the project and then the test command in another terminal

test('home page is rendered correctly', async ({page}) => {
  //check for heading in the DOM
  await page.goto('/');
  await page.waitForURL('/');
  const heading = page.getByRole('heading');

  await expect(heading).toBeAttached();
});

test('button navigates to subpage succeeds', async ({page}) => {
  await page.goto('/');
  await page.waitForURL('/');
  const button = page.getByRole('button', {name: 'Click me'});

  await button.click({timeout: 100});
  await page.waitForURL('/selectors');
  const heading = page.getByText('Welcome to Our App');
  await expect(heading).toBeAttached();
});

test('different locators', async ({page}) => {
  await page.goto('/');
  await page.waitForURL('/');

  const info = page.getByTestId('info');
  await expect(info).toBeAttached();

  const largeText = page.locator('.text-lg').first();
  await expect(largeText).toBeAttached();

  const danger = page.locator('#danger').first();
  await expect(danger).toBeAttached();
  expect(await danger.isVisible()).toBe(false);
});
