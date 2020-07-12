exports.up = function (knex, Promise) {
    return knex.schema.createTable('answers', (answer) => {
        answer.increments('id');
        answer.string('answer', 1000);
        answer.integer('upvotes');
        answer.integer('downvotes');
        answer.integer('user_id').references('id').inTable('users').onDelete('cascade');
        answer.integer('question_id').references('id').inTable('questions').onDelete('cascade');;
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('answers');
};
