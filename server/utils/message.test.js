const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Horace';
    var text = 'Message for testing';
    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Horace';
    var lat = 1;
    var lng = 1;
    var location = generateLocationMessage(from, lat, lng);

    expect(location.from).toBe(from);
    expect(location.createdAt).toBeA('number');
    expect(location.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
  });
});
