const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries');
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/questions', (req, res) => {
    queries.getAllQuestions().then(questions => res.send(questions));
});

app.get('/questions/:id', (req, res) => {
    queries.getQuestionById(req.params.id).then(question => res.send(question));
});

app.get('/answers', (req, res) => {
    queries.getAllAnswers().then(answers => res.send(answers));
});

app.get('/answers/:id', (req, res) => {
    queries.getAnswerById(req.params.id).then(answer => res.send(answer));
});

app.get('/users', (req, res) => {
    queries.getAllUsers().then(users => res.send(users));
});

app.get('/users/:id', (req, res) => {
    queries.getUserById(req.params.id).then(user => res.send(user));
});

app.post('/questions', (req, res) => {
    queries.createQuestion(req.body).then(newQuestion => res.send(newQuestion));
});

app.post('/answers', (req, res) => {
    queries.createAnswer(req.body).then(newAnswer => res.send(newAnswer));
});

app.delete('/questions/:id', (req, res) => {
    queries.deleteQuestion(req.params.id).then(res.sendStatus(204));
});

app.delete('/answers/:id', (req, res) => {
    queries.deleteAnswer(req.params.id).then(res.sendStatus(204));
});

app.delete('/users/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(res.sendStatus(204));
});

app.patch('/questions/:id/upvote', (req, res) => {
    queries.patchUpvoteQuestion(req.params.id).then(newVoteCount => res.send('post'));
});

app.patch('/questions/:id/downvote', (req, res) => {
    queries.patchDownvoteQuestion(req.params.id).then(newVoteCount => res.send('post'));
});

app.patch('/answers/:id/upvote', (req, res) => {
    queries.patchUpvoteAnswer(req.params.id).then(newVoteCount => res.send('it worked'));
});

app.patch('/answers/:id/downvote', (req, res) => {
    queries.patchDownvoteAnswer(req.params.id).then(newVoteCount => res.send('it worked'));
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
