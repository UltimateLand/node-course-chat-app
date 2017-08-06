const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Horace', 'Message for testing');

    expect(message.from).toBe('Horace');
    expect(message.text).toBe('Message for testing');
    expect(message.createdAt).toBeA('number');
  });
});
