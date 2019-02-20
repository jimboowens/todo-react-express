var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();

router.post('/addTask',(req,res)=>{
  const taskName = req.body.taskName
  const taskDate = req.body.taskDate
  const insertQuery=`insert into tasks(taskName,taskDate)
  values(?,?)`
  connection.query(insertQuery, [taskName,taskDate], (err,results)=>{
    if (err) {throw err}
    const getTasksQuery= `select * from tasks`
    connection.query(getTasksQuery,(err2,results2)=>{
      if (err2) {throw err2}
      res.json(results2)
    })
  })
  // res.json({taskName,taskDate})
})

module.exports = router;
