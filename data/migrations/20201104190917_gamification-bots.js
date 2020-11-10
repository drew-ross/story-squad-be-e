
exports.up = function (knex) {
    return knex.schema.createTable('Ghost_Users', (t) => {
        t.increments('ID');
        t.integer('Points').notNullable();
        t.enu('Winner', [0, 1, 2], {
          useNative: true,
          enumName: 'winner',
        });
        t.enu('Type', ['WRITING', 'DRAWING'], {
          useNative: true,
          enumName: 'subtype',
        });
        t.integer('SquadID')
          .notNullable()
          .unsigned()
          .references('Squads.ID')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
      })
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Ghost_Users')
        .raw('DROP TYPE winner')
        .raw('DROP TYPE subtype');
};
