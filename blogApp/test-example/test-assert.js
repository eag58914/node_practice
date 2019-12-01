const { expect } = require('chai');
let expected;
let current;

before(() => {
	expected = [ 'a', 'b', 'c' ];
});

describe('String#split', () => {
	beforeEach(() => {
		current = 'a,b,c'.split(',');
	});
	it('should return an array', () => {
		expect(Array.isArray(current)).to.be.true;
	});
	it('should return the same array', () => {
		expect(expected.length, current.length).to.be.true;
		for (let i = 0; i < expected.length; i++) {
			expect(expected[i].equal(current[i]));
		}
	});
});
