const express = require('express');
const router = express.Router();
module.exports = router;

const models = require('../db/models');
const Secret = models.Secret;
const Comment = models.Comment;

const COUNT_PER_PAGE = 5;

router.get('/', function (req, res, next) {

    req.query.page = req.query.page || 1;

    const countingTotalPages = Secret.count().then(function (amountOfAllPages) {
        return Math.ceil(amountOfAllPages / COUNT_PER_PAGE);
    });

    const queryConfig = {
        limit: COUNT_PER_PAGE,
        offset: (req.query.page - 1) * COUNT_PER_PAGE,
        order: 'id DESC'
    };

    const findingSecretsForThisPage = Secret.findAll(queryConfig)

    Promise.all([findingSecretsForThisPage, countingTotalPages])
        .then(function (values) {
            const secrets = values[0];
            const totalPages = values[1];
            res.render('index', {
                secrets: secrets,
                page: req.query.page,
                totalPages: totalPages
            });
        })
        .catch(next);

});

router.get('/add', function (req, res, next) {
    res.render('add');
});

router.get('/:secretId', function (req, res, next) {

    Secret.findById(req.params.secretId, { include: [Comment] })
        .then(function (foundSecret) {
            res.render('secret', { secret: foundSecret });
        })
        .catch(next);

});

router.post('/', function (req, res, next) {

    Secret.create({
        text: req.body.text
    })
        .then(function (createdSecret) {
            res.redirect(`/secrets`);
        })
        .catch(next);

});

router.use('/:secretId/comments', require('./comments-subrouter'));