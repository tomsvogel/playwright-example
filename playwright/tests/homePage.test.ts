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
