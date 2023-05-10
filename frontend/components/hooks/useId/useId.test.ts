import { renderHook } from '@testing-library/react';

import { useId } from '.';

describe('useId tests', () => {
	it('should return an ID', () => {
		const { result } = renderHook(useId);
		expect(result.current).toMatch(/(\w|\d){13}/);
	});
	it('should generate a unique ID per render', () => {
		const { result: result1 } = renderHook(useId);
		const { result: result2 } = renderHook(useId);

		expect(result1.current).not.toBe(result2.current);
	});
});
