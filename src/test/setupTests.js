// // import '@testing-library/jest-dom';
// import { server } from '../mock/server';

// beforeAll(()=>server.listen());
// afterEach(()=>server.resetHandlers());
// afterAll(()=>server.close());



import { setupServer } from 'msw/node';
import { handlers } from '../mock/handlers'; // Adjust path if necessary

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());