
exports.up = function (knex) {
    return knex.schema.createTable('Player_Count', (t) => {
        t.increments('ID');
        t.integer('ChildID')
            .notNullable()
            .unsigned()
            .references('Children.ID')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
        t.string('Child_Name')
            .notNullable()
            .unsigned()
            .references('Children.Name')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Player_Count')
};
