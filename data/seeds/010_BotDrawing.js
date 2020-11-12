const Bot_Drawing = [...Array(3).map((i, idx) => ({
  ID: idx,
  URL: 'https://test-image-bucket-14579.s3.amazonaws.com/pdf.pdf',
  Bot_SubmissionID: Bot_Submissions.ID,
  }))];

exports.seed = function(knex) {
    return knex('Bot_Drawing').insert(Bot_Drawing);
};
