const faker = require('faker');

const Ghost_Users = [...new Array(3)].map((i, idx) => ({
  Points: `${faker.random.number({ min: 0, max: 25 })}`,
  // idx may need to be changed later to better reflect actual Squad IDs
  SquadID: idx, 
}));

exports.seed = function(knex) {
  return knex('Ghost_Users').insert(Ghost_Users);
      
};
