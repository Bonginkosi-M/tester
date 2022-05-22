const mult = require('./sketch')

/* test('adds 1 + 2 to equal 3', () =>{
    expect(sum(1,2)).toBe(3);
}) */

test('adds 1 + 2 to equal 2', multTest);
function multTest()
{
    expect(mult(1,2)).toBe(2);
}
