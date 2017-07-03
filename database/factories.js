var app = require('../server/server');

app.seeder.createFactory('Person', {
  'firstName': '{{name.firstName}}',
  'lastName': '{{name.lastName}}',
  'jobTitle': '{{name.jobTitle}}'
});