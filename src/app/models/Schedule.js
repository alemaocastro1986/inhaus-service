module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    protocolo: DataTypes.BIGINT,
    centro: DataTypes.STRING,
    deposito: DataTypes.STRING,
    cliente: DataTypes.BIGINT,
    nome_cliente: DataTypes.STRING,
    ponto_operacao: DataTypes.STRING,
    transportadora: DataTypes.BIGINT,
    nome_transportadora: DataTypes.STRING,
    data_aceite: DataTypes.DATE,
    data_agenda: DataTypes.DATE,
    documento: DataTypes.INTEGER,
    nome_motorista: DataTypes.STRING,
    documento_motorista: DataTypes.STRING,
    placa_cavalo: DataTypes.STRING,
    placa_carreta1: DataTypes.STRING,
    placa_carreta2: DataTypes.STRING,
    status: DataTypes.STRING,
    negocio: DataTypes.STRING
  })

  return Schedule
}
