const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber()', function() {
    it('should return the correct result for the given operation of two rounded digits', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
});
