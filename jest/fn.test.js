const fn = require('./fn');

test('1 is 1', () => {
    expect(1).toBe(1);
});

test('2 + 3 equals 5', () => {
    expect(fn.add(2, 3)).toBe(5);
})

test('2 + 3 equals 5', () => {
    expect(fn.add(2, 3)).toEqual(5);
})

test('3 + 3 not equals 5', () => {
    expect(fn.add(3, 3)).not.toBe(5);
})

test('please return an object with name and age', ()=>{
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30,
    })
})

test('please return an object with name and age', ()=>{
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name: "Mike",
        age: 30,
        gender: undefined
    })
})

test("null is null", () => {
    expect(null).toBeNull();
})

test("0 is false", () => {
    expect(fn.add(1, -1)).toBeFalsy();
})

test("non-empty string is true", () => {
    expect(fn.add("1", "-1")).toBeTruthy();
})

test("ID's length should be less than 10", () => {
    const id = "FWEOIJEF#$#WOIJ";
    expect(id.length).not.toBeLessThanOrEqual(10);
})