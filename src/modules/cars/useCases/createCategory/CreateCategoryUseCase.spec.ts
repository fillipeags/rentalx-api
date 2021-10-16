describe("Create Category", () => {
  it("Wait that 2 + 2 equals 4", () => {
    const soma = 2 + 2;

    const result = 4;

    expect(soma).toBe(result);
  });

  it("Wait that 2 + 2 differs from 5", () => {
    const soma = 2 + 2;

    const result = 5;

    expect(soma).not.toBe(result);
  });
});
