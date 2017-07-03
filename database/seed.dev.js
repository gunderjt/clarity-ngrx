var app = require('../server/server');

app.seeder.migrate('Person'); // will generate 1 user

app.seeder.migrate('Person', 20); // will generate 20 users

app.seeder.migrate('Person', 5, {
    firstName: 'Roger'
}); // will generate 5 users named Roger