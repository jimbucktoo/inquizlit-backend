exports.seed = function (knex, Promise) {
    return knex('answers').del()
        .then(function () {
            return knex('answers').insert([
            {
                answer: 'Sometimes I lose drive in the middle of a project after the launch excitement has worn off. I combat that by breaking up the project into mini-milestones and celebrating them with my team. The original buzz gets recreated and it becomes obvious how crucial our work is.',
                upvotes: 13,
                downvotes: 2,
                user_id: 1,
                question_id: 1
            },
            {
                answer: 'I’m such a perfectionist. I really have to hold back from being the best.',
                upvotes: 4,
                downvotes: 3,
                user_id: 2,
                question_id: 1
            },
            {
                answer: 'I work best on a team.',
                upvotes: 5,
                downvotes: 2,
                user_id: 1,
                question_id: 2
            },
            {
                answer: 'I love the speed and energy of teamwork, and I also like concentrated time to work alone and execute on projects.',
                upvotes: 17,
                downvotes: 4,
                user_id: 2,
                question_id: 2
            },
            {
                answer: 'MVC stands for Model-View-Controller. It\'s a way to separate code into its own compartments.',
                upvotes: 42,
                downvotes: 1,
                user_id: 3,
                question_id: 3
            },
            {
                answer: 'Polymorphism is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.',
                upvotes: 35,
                downvotes: 4,
                user_id: 3,
                question_id: 4
            },
            {
                answer: 'Polymorphism is the condition of occurring in several different forms.',
                upvotes: 9,
                downvotes: 2,
                user_id: 4,
                question_id: 4
            },
            {
                answer: 'const arr = [10, 12, 15, 21];for (var i = 0; i < arr.length; i++) {  setTimeout(function() {    console.log(\'The index of this number is: \' + i);  }, 3000);}',
                upvotes: 8,
                downvotes: 2,
                user_id: 3,
                question_id: 5
            },
            {
                answer: 'const arr = [10, 12, 15, 21];for (var i = 0; i < arr.length; i++) {  setTimeout(function(i_local) {    return function() {      console.log(\'The index of this number is: \' + i_local);    }  }(i), 3000);}',
                upvotes: 8,
                downvotes: 2,
                user_id: 3,
                question_id: 5
            },
            {
                answer: 'const arr = [10, 12, 15, 21];for (let i = 0; i < arr.length; i++) {  setTimeout(function() {    console.log(\'The index of this number is: \' + i);  }, 3000);',
                upvotes: 20,
                downvotes: 3,
                user_id: 4,
                question_id: 5
            },
            {
                answer: 'function isPalindrome(str) {  str = str.replace(/\W/g, \'\').toLowerCase();  return (str == str.split(\'\').reverse().join(\'\'));}',
                upvotes: 10,
                downvotes: 3,
                user_id: 4,
                question_id: 6
            },
            {
                answer: 'function palindrome(str) { var re = /[^A-Za-z0-9]/g; str = str.toLowerCase().replace(re, \'\'); var len = str.length; for (var i = 0; i < len/2; i++) {   if (str[i] !== str[len - 1 - i]) {       return false;   } } return true;}',
                upvotes: 7,
                downvotes: 2,
                user_id: 4,
                question_id: 6
            },
            {
                answer: 'I think it is the tortoise because slow and steady wins the race and because a tortoise is the only animal listed with 5 digits on its hand so it can count better than the others.',
                upvotes: 8,
                downvotes: 2,
                user_id: 4,
                question_id: 7
            },
            {
                answer: 'I don\'t know.',
                upvotes: 3,
                downvotes: 2,
                user_id: 4,
                question_id: 8
            },
            {
                answer: 'You get brown if you mix purple and yellow because purple is made up of the two primary colors blue and red. Yellow is the third primary color and if you mix all three primary colors, you always get brown.',
                upvotes: 37,
                downvotes: 2,
                user_id: 4,
                question_id: 8
            }
]);
});
};
