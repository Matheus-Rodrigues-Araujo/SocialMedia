const express = require('express')

const recordRoutes = express.Router()

const dbo = require('../db/conn')

const ObjectId = require('mongodb').ObjectId;

// Get the list of all the records
recordRoutes.route('/record').get((req, res)=>{
    let db_connect = dbo.getDb('social_media')
    db_connect
    .collection('users')
    .find({})
    .toArray((err, result)=>{
        if(err) throw new Error("Couldn't connect")
        res.json(result)
        // res.send('DB connected')
    })
})

// Get a single record by id
recordRoutes.route('/record/:id').get((req, res)=>{
    let db_connect = dbo.getDb()
    let myQuery = {_id: ObjectId(req.params.id)}
    db_connect
    .collection('users')
    .findOne(myQuery, (err, result)=>{
        if (err) throw new Error('Record not found!')
        res.json(result)
    })
    
})

// Create a new record
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    db_connect.collection("users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

// Update a record
recordRoutes.route('/update/:id',(req, response)=>{
    let db_connect = dbo.getDb()
    let myQuery = {_id: ObjectId(req.params.id)}

    let newValues = {
        $set:{
            username: req.body.username,
            email: req.body.email,
        }
    }
    db_connect
    .collection('users')
    .updateOne(myQuery, newValues, (err, res)=>{
        if(err) throw err;
        response.json(res)
    })
})


// Delete a record
recordRoutes.route('/:id',(req, response)=>{
    let db_connect = dbo.getDb()
    let myQuery = {_id: ObjectId(req.params.id)}
    db_connect
    .collection('users')
    .deleteOne(myQuery,(err, obj)=>{
        if(err) throw err;
        console.log('1 document deleted')
        response.json(obj)
    })
})


module.exports = recordRoutes