'use strict';

module.exports = app => {
  const { INTEGER, TEXT,DATE, STRING } = app.Sequelize;
  const User = app.model.define( 'user', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // unique: true,
      },
      name: STRING(100),
      qq: STRING(255),
      jobs: STRING(255),
      tel: STRING(255),
      desc: STRING(255),
      created_at: DATE,
      updated_at: DATE,
    },
    // {
    //   freezeTableName: true,
    //   tableName: 'test',
    //   timestamp: true,
    //   paranoid: true,
    // }
  );
  // Test.associate = function() {
  //   app.model.models.Test.belongsTo(app.model.models., {
  //     foreignKey: '',
  //     targetKey: 'id',
  //     constraints: false,
  //   });
  // };
  return User;
}; 