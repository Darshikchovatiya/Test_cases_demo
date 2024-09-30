import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { handlers } from './mock/handlers';

const server = setupServer(...handlers)


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('mock API call', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  expect(data).toEqual([{ id: 1, name: 'John Doe' }]);
});