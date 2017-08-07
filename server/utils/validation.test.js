const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var text = 12345;
    var test = isRealString(text);

    expect(test).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var text = '       ';
    var test = isRealString(text);

    expect(test).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var text = ' H o r a c e ';
    var test = isRealString(text);

    expect(test).toBe(true);
  });
})
