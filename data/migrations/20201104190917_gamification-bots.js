
exports.up = function (knex) {
    return knex.schema.createTable('Ghost_Users', (t) => {
        
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Ghost_Users')
};
