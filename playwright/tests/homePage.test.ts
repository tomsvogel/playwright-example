import test, {expect} from 'playwright/test';

//execute 'yarn playwright install' before executing tests to install browsers
//to correctly start tests execute the project and then the test command in another terminal

test.beforeEach(async ({page}) => {
  //navigate to root page
  await page.goto('/');
  await page.waitForURL('/');
});

test('home page is rendered correctly', async ({page}) => {
  //check for heading in the DOM
  const heading = page.getByRole('heading');

  await expect(heading).toBeAttached();
});

test('button navigates to subpage succeeds', async ({page}) => {
  const button = page.getByRole('button', {name: 'Click me'});

  await button.click();

  //await page.getByRole('button').click();

  await page.waitForURL('/');
});
