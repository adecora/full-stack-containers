/* eslint-disable */
db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [
    {
      role: 'dbOwner',
      db: 'bloglist-app',
    }
  ],
});

