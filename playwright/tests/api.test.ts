import test, {expect} from 'playwright/test';

//execute 'yarn playwright install' before executing tests to install browsers
//to correctly start tests execute the project and then the test command in another terminal

test('api returns correct object', async ({request}) => {
  //check for heading in the DOM
  const usersRequest = await request.get(`/api/users`);
  expect(usersRequest.ok()).toBeTruthy();
  const users = await usersRequest.json();
  expect(Object.keys(users.users[0])).toEqual(['username', 'email']);
});
