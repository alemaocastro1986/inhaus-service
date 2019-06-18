'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tsrchecks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      remessa: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      ordem_transporte: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      transportadora: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      placa_cavalo: {
        allowNull: true,
        type: Sequelize.STRING(10)
      },
      placa_carreta: {
        allowNull: true,
        type: Sequelize.STRING(10)
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tsrcheck')
  }
}
