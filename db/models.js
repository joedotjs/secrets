const Sequelize = require('sequelize');

const db = new Sequelize(
    'postgres://localhost:5432/secrets'
);

const SecretModel = db.define('secret', {
    text: {
        type: Sequelize.TEXT // STRING is limited to 255 characters
    }
});

const CommentModel = db.define('comment', {
    text: {
        type: Sequelize.TEXT
    }
});

CommentModel.belongsTo(SecretModel);
SecretModel.hasMany(CommentModel);

module.exports = {
    Secret: SecretModel,
    Comment: CommentModel
};