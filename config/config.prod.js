module.exports = {
  redis : {
    client: {
      port: 6379,
      host: '',
      password: '',
      db: 1,
    },
  },
  sequelize:{
    dialect: 'mysql',
    host: '127.0.0.1',
    // host: 'localhost',
    port: '3306',  // 端口号
    database: 'localhost',// 数据库名
    username: 'root', // 用户名
    password: '111111', // 密码
    timezone: '+08:00', // 时区
  },
  cluster : {
    listen: {
      path: '',
      port: 3000,
      hostname: 'localhost', // localhost
      // hostname: '0.0.0.0', // localhost
    },
  },
  // sequelize:{
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   // host: 'localhost',
  //   port: '3306',  // 端口号
  //   database: 'liuyu',// 数据库名
  //   username: 'root', // 用户名
  //   password: 'cc37b45ee9a2bcbc', // 密码
  //   timezone: '+08:00', // 时区
  // },
  // cluster : {
  //   listen: {
  //     path: '',
  //     port: 3001,
  //     hostname: '172.17.0.6', // localhost
  //     // hostname: '0.0.0.0', // localhost
  //   },
  // },
  security : {
    csrf: {
      enable: true,
      ignoreJSON: false,
    },
    domainWhiteList: [ '*' ], // 跨域访问白名单
  }
}