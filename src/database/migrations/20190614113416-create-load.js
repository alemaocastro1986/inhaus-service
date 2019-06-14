'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('loads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      remessa: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      item_remessa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      operacao: Sequelize.STRING(10),
      protocolo: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      material: Sequelize.STRING(40),
      material_descricao: Sequelize.STRING(80),
      lote: Sequelize.STRING(16),
      peso_liquido: Sequelize.DOUBLE,
      unidade_medida: Sequelize.STRING(10),
      chegada: Sequelize.DATE,
      entrada: Sequelize.DATE,
      saida: Sequelize.DATE,
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('loads')
  }
}
