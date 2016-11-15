const Sequelize = require('sequelize');

const db = new Sequelize(
    'postgres://localhost:5432/secrets'
);

const SecretModel = db.define('secret', {});

const CommentModel = db.define('comment', {});

CommentModel.belongsTo(SecretModel);
SecretModel.hasMany(CommentModel);

module.exports = {
    Secret: SecretModel,
    Comment: CommentModel
};