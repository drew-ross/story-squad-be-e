const Bot_Writing = [...new Array(3).map((i, idx) => ({
  ID: idx,
  URL: 'https://test-image-bucket-14579.s3.amazonaws.com/pdf.pdf',
  PageNum: 2,
  Bot_SubmissionID: Bot_Submissions.ID
}))];

exports.seed = function(knex) {
  return knex('Bot_Writing').insert(Bot_Writing);
};
