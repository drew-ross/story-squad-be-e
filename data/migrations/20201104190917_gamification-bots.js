
exports.up = function (knex) {
  return knex.schema.createTable('Ghost_Users', (t) => {
    t.increments('ID');
    t.integer('Points').nullable();
    t.integer('SquadID').notNullable()
  })
  .createTable('Bot_Submissions', (t) => {
    t.increments('ID');
    t.integer('Bot_StoryID').notNullable()
    t.boolean('HasRead').defaultTo(false);
    t.boolean('HasWritten').defaultTo(false);
    t.boolean('HasDrawn').defaultTo(false);
    t.integer('Complexity');
  })
  .createTable('Bot_Writing', (t) => {
    t.increments('ID');
    t.string('URL').nullable().unique();
    t.integer('PageNum').nullable();
    t.integer('Bot_SubmissionID').notNullable()
    t.unique(['PageNum', 'Bot_SubmissionID']);
  })
  .createTable('Bot_Drawing', (t) => {
    t.increments('ID');
    t.string('URL').nullable().unique();
    t.integer('Bot_SubmissionID').unique()
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Ghost_Users')
    .dropTableIfExists('Bot_Drawing')
    .dropTableIfExists('Bot_Writing')
    .dropTableIfExists('Bot_Submissions');
};
