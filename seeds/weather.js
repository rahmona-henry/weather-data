
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('weather').del(),

    // Inserts seed entries
    knex('weather').insert({id: 1, city: 'Wellington', weathercondition: 'Clear', time: '12:00'})
  );
};
