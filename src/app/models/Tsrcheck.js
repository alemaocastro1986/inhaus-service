module.exports = (sequelize, DataTypes) => {
  const Tsrcheck = sequelize.define('Tsrcheck', {
    remessa: DataTypes.BIGINT,
    ordem_transporte: DataTypes.BIGINT,
    transportadora: DataTypes.STRING,
    placa_cavalo: DataTypes.STRING,
    placa_carreta: DataTypes.STRING
  })

  return Tsrcheck
}
