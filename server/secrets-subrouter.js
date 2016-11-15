const express = require('express');
const router = express.Router();
module.exports = router;

const models = require('../db/models');
const Secret = models.Secret;
const Comment = models.Comment;

router.get('/', function (req, res, next) {});

router.get('/add', function (req, res, next) {});

router.get('/:secretId', function (req, res, next) {});

router.post('/', function (req, res, next) {});

router.use('/:secretId/comments', require('./comments-subrouter'));