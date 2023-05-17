import '@testing-library/jest-dom/extend-expect';

import { server } from '@/mocks/handlers';
import { afterEach } from 'node:test';

Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation(query => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

// Establish API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers added during a test
afterEach(() => server.resetHandlers());

// clean up
afterAll(() => server.close());
