describe('Monthly Rate Calculation', function () {
  it('should calculate the monthly rate correctly', function () {
    // ...
    expect(calculateMonthlyPayment({
      amount: 25000,
      years: 5,
      rate: 2.5
    })).toEqual('443.68');
  });
});


describe('Two Decimal Places', function () {
  it("should return a result with 2 decimal places", function () {
    // ...
    expect(calculateMonthlyPayment({
      amount: 100000,
      years: 20,
      rate: 5.5
    })).toEqual('687.89');
  });
});

describe('Zero Values', function () {
  it('should return a NaN for zero values', function () {
    expect(calculateMonthlyPayment({
      amount: 10000,
      years: 0,
      rate: 0
    })).toEqual('NaN');
  });
});


/// etc