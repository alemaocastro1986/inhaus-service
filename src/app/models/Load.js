module.exports = (sequelize, DataTypes) => {
  const Load = sequelize.define('Load', {
    remessa: DataTypes.BIGINT,
    item_remessa: DataTypes.INTEGER,
    operacao: DataTypes.STRING,
    protocolo: DataTypes.BIGINT,
    material: DataTypes.STRING,
    material_descricao: DataTypes.STRING,
    lote: DataTypes.STRING,
    peso_liquido: DataTypes.DOUBLE,
    unidade_medida: DataTypes.STRING,
    chegada: DataTypes.DATE,
    entrada: DataTypes.DATE,
    saida: DataTypes.DATE
  })
  return Load
}
