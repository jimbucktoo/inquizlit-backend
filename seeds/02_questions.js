exports.seed = function (knex, Promise) {
    return knex('questions').del()
        .then(function () {
            return knex('questions').insert([
                {
                    question: 'What are your weaknesses?',
                    tag: 'cultural',
                    upvotes: 2,
                    downvotes: 1,
                    user_id: 1
                },
                {
                    question: 'Do you work best alone or on a team?',
                    tag: 'cultural',
                    upvotes: 5,
                    downvotes: 2,
                    user_id: 2
                },
                {
                    question: 'What is MVC?',
                    tag: 'computer science',
                    upvotes: 22,
                    downvotes: 7,
                    user_id: 2
                },
                {
                    question: 'What is polymorphism?',
                    tag: 'computer science',
                    upvotes: 13,
                    downvotes: 3,
                    user_id: 3
                },
                {
                    question: 'Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.',
                    tag: 'algorithms',
                    upvotes: 5,
                    downvotes: 2,
                    user_id: 3
                },
                {
                    question: 'Write a simple function that returns a boolean indicating whether or not a string is a palindrome.',
                    tag: 'algorithms',
                    upvotes: 12,
                    downvotes: 1,
                    user_id: 4
                },
                {
                    question: 'You have a goat, a horse, a tortoise, and a hare, which one does math the best and why?',
                    tag: 'riddles',
                    upvotes: 28,
                    downvotes: 7,
                    user_id: 3
                },
                {
                    question: 'If you take purple and mix it with yellow, what color do you get?',
                    tag: 'riddles',
                    upvotes: 13,
                    downvotes: 2,
                    user_id: 4
                }
            ]);
        });
};
