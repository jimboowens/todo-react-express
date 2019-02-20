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
  values(?,?)` //this is to insert the submitted task from the front end into the db
  connection.query(insertQuery, [taskName,taskDate], (err,results)=>{
    if (err) throw err // can't be a ternary because a nested if/else
    const getTasksQuery= `select * from tasks`
    connection.query(getTasksQuery,(err2,results2)=>{ // this is to render the updated tasks including the just submitted task
      err2 ? err2 :res.json(results2)
    })
  })
  // res.json({taskName,taskDate})
})

router.get('/getTasks',(req,res)=>{ // this is to render the list of tasks when the pages loads (of course, it's on a componentDidMount to reduce initial load time)
    const getTasksQuery= `select * from tasks`
    connection.query(getTasksQuery,(err,results)=>{
      err ?  err : res.json(results)
    })
  
  // res.json({taskName,taskDate})
})

router.get('/getTasks/:tid',(req,res)=>{
  console.log(req.params.tid)
  const tid = req.params.tid;
  const selectTaskQuery = `select * from tasks where id = ?`
  connection.query(selectTaskQuery,[tid],(err,results)=>{
    err ? err : res.json({task:results[0]});
  })
})

router.post('/edit',(req,res)=>{
    const taskName = req.body.taskName
    const taskDate = req.body.taskDate
    const id = req.body.id;
    // console.log("id,taskName,taskDate",id,taskName,taskDate)
    const updateQuery = `Update tasks set taskName = ?, taskDate = ? where id=?`
    connection.query(updateQuery,[taskName,taskDate,id],(err,results)=>{
      err ? err : res.json({
        msg: "Updated"
      })

    })
})

module.exports = router;
