'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      protocolo: {
        allowNull: false,
        unique: true,
        type: Sequelize.BIGINT
      },
      centro: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      deposito: {
        allowNull: false,
        type: Sequelize.STRING(5)
      },
      cliente: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      nome_cliente: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      ponto_operacao: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      transportadora: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      nome_transportadora: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      data_aceite: Sequelize.DATE,
      data_agenda: Sequelize.DATE,
      documento: Sequelize.INTEGER,
      nome_motorista: Sequelize.STRING(100),
      documento_motorista: Sequelize.STRING(25),
      placa_cavalo: Sequelize.STRING(10),
      placa_carreta1: Sequelize.STRING(10),
      placa_carreta2: Sequelize.STRING(10),
      status: Sequelize.STRING(30),
      negocio: Sequelize.STRING(10),
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('schedules')
  }
}
