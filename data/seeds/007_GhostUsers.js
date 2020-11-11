
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ghost_Users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ghost_Users').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
