const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://localhost:5432/pop')

const models = {
    user: connection.import('./users'),
    question: connection.import('./questions'),
    answer: connection.import('./answers')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.connection = connection;
models.Sequelize = Sequelize;

module.exports =  models;