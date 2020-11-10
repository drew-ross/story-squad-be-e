exports.up = function (knex) {
    return knex.schema
        .table('Writing', (t) => {
            t.specificType('Emoji', 'TEXT[]');
        })
        .table('Drawing', (t) => {
            t.specificType('Emoji', 'TEXT[]');
        })
};
  
exports.down = function (knex) {
    return knex.schema
        .table('Writing', (t) => {
            t.dropColumn('Emoji');
        })
        .table('Drawing', (t) => {
            t.dropColumn('Emoji');
        })
};