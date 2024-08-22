import Sum from "./Sum"

test('testing for sum function', () => {
    let a = 10;
    let b = 20;
    let output = 30

    expect(Sum(a,b)).toBe(output)
})

test('testing for sum function 2', () => {
    expect(Sum(80,120)).toBe(200)
})