exports.up = function (knex) {
    return knex.schema
        .table('Writing', (t) => {
            t.text('Emoji');
        })
        .table('Drawing', (t) => {
            t.text('Emoji');
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