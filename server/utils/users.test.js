const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Aaron',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Horace',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Ren',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Horace',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');

    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var user = users.removeUser('87');

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('1');

    expect(user).toEqual(users.users[0]);
  });

  it('should not find user', () => {
    var user = users.getUser('87');

    expect(user).toNotExist();
    expect(user).toEqual(undefined);
  });

  it('should return name for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Aaron', 'Ren']);
  });

  it('should return name for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Horace']);
  });
});
