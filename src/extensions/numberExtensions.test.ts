import "./numberExtensions";

test("Rounds 1.589 to 1.59 (default decimal places)", () => {
    expect((1.589).round()).toBe(1.59);
});

test("Rounds 1.99 to 2 (1 decimal place)", () => {
    expect((1.99).round(1)).toBe(2);
});

test("Rounds 1.5 to 2 (0 decimal places)", () => {
    expect((1.99).round(0)).toBe(2);
});

test("Rounds 67.433 to 67.433 (3 decimal places)", () => {
    expect((67.433).round(3)).toBe(67.433);
});
