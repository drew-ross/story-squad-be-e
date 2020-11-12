
exports.up = function (knex) {
  return knex.schema.createTable('Ghost_Users', (t) => {
    t.increments('ID');
    t.integer('Points').notNullable();
    t.integer('SquadID')
      .notNullable()
      .unsigned()
      .references('Squads.ID')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })
  .createTable('Bot_Submissions', (t) => {
    t.increments('ID');
    t.integer('ChildID')
      .notNullable()
      .unsigned()
      .references('Children.ID')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    t.integer('Bot_StoryID')
      .notNullable()
      .unsigned()
      .references('Stories.ID')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    t.boolean('HasRead').defaultTo(false);
    t.boolean('HasWritten').defaultTo(false);
    t.boolean('HasDrawn').defaultTo(false);
    t.integer('Complexity');
    t.unique(['ChildID', 'Bot_StoryID']);
  })
  .createTable('Bot_Writing', (t) => {
    t.increments('ID');
    t.string('URL').notNullable().unique();
    t.integer('PageNum').notNullable();
    t.integer('Bot_SubmissionID')
      .notNullable()
      .unsigned()
      .references('Bot_Submissions.ID')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    t.unique(['PageNum', 'Bot_SubmissionID']);
  })
  .createTable('Bot_Drawing', (t) => {
    t.increments('ID');
    t.string('URL').notNullable().unique();
    t.integer('Bot_SubmissionID')
      .notNullable()
      .unsigned()
      .unique()
      .references('Bot_Submissions.ID')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Ghost_Users')
    .dropTableIfExists('Bot_Drawing')
    .dropTableIfExists('Bot_Writing')
    .dropTableIfExists('Bot_Submissions');
};
