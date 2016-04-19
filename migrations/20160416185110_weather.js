exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('weather', function(table) {
   table.increments();
   table.string('city');
   table.string('weathercondition');
   table.string('time');
   table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('weather');
};
