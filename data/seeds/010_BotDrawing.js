const Bot_Drawing = [...Array(3)].map((i, idx) => ({
  ID: idx,
  URL: null,
  Bot_SubmissionID: idx
  }));

exports.seed = function(knex) {
    return knex('Bot_Drawing').insert(Bot_Drawing);
};
