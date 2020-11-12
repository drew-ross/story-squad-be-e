const Bot_Writing = [...new Array(3)].map((i, idx) => ({
  ID: idx,
  PageNum: idx,
  Bot_SubmissionID: idx
}));

exports.seed = function(knex) {
  return knex('Bot_Writing').insert(Bot_Writing);
};
