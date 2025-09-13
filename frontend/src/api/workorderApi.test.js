import { getWorkOrders } from './workOrderApi';

describe('workOrderApi', () => {
  it('should return a dummy API response', () => {
    // This is a simple test that confirms the function returns the expected value.
    expect(getWorkOrders()).toBe("This is a dummy API response.");
  });
});
