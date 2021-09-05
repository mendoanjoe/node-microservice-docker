mongo --eval "
db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');
db = db.getSiblingDB('$MONGO_INITDB_DATABASE');

db.createUser({
  user: '$MONGO_INITDB_USERNAME',
  pwd: '$MONGO_INITDB_PASSWORD',
  roles: [
    {
      role: 'readWrite',
      db: '$MONGO_INITDB_DATABASE'
    }
  ]
});

db.users.insert(
  {
    name: 'Firman Admin',
    email: 'mendoanjoe@gmail.com',
    password: '4fb5e79bb127ed34850de83a36631a2d1ce08d0d952f4fc40d320d706d27901578dbca5df1766664ca916c7806f5f47d93b0036cbde2634d19ee864c7ff013ce',
    access_key: ['admin'],
    created_at: ISODate('2021-09-04T10:15:21.161Z'),
    updated_at: ISODate('2021-09-04T10:15:21.161Z'),
    __v: 0
  }
);

db.users.insert(
  {
    name: 'Firman User',
    email: 'mendoanjoe1@gmail.com',
    password: '4fb5e79bb127ed34850de83a36631a2d1ce08d0d952f4fc40d320d706d27901578dbca5df1766664ca916c7806f5f47d93b0036cbde2634d19ee864c7ff013ce',
    access_key: [],
    created_at: ISODate('2021-09-04T10:15:21.161Z'),
    updated_at: ISODate('2021-09-04T10:15:21.161Z'),
    __v: 0
  }
);
"