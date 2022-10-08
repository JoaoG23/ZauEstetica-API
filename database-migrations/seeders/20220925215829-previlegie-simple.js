'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('previlegies_users', [
      {
        description: 'Full Admin',
        force: 1
      },
      {
        description: 'Colaborador',
        force: 2
      },
      {
        description: 'Cliente',
        force: 3
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('previlegies_users', null, {});
  }
};