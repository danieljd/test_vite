const YAML = require("yamljs");
const fs = require("fs");
var mysql = require("mysql");
var mysqlConfig = YAML.parse(
  fs.readFileSync("./config/database.yml").toString()
);

var pool = mysql.createPool({
  connectionLimit: 100, //max connection
  host: mysqlConfig.dbsql.host,
  port: mysqlConfig.dbsql.port,
  user: mysqlConfig.dbsql.user,
  password: mysqlConfig.dbsql.pwd,
  database: mysqlConfig.dbsql.database,
});

export const LoginInDao = (req, res) => {
  const userName = req.userName;
  // const userPassword = req.password;
  const sql = `select * from user where user.name = ${userName}`;
  pool.query(sql, function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
  });
};

export const List = (req, res) => {
  const sql = `select * from cases`;
  pool.query(sql, function (err, rows, fields) {
    if (err) throw err;
    res.json(rows);
    // res.json([
    //   { id: 1, name: "test1" },
    //   { id: 2, name: "test2" },
    // ]);
  });
};
