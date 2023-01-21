const express = require('express')
const recordRoutes = express.Router()

const dbo = require('../db/conn')

/* This help converts the id from string
   to ObjectId for the _id
*/
const ObjectId = require('mongodb').ObjectId

// Get the list of all the records
recordRoutes.route('/api').get((req, res)=>{
    const db_connect = dbo.getDb('social_media')
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
recordRoutes.route('/api/login').get((req, res)=>{
    let db_connect = dbo.get('social_media')
    let myQuery = {_id: ObjectId(req.params.id)}
    db_connect
    .collection('users')
    .findOne(myQuery, (err, result)=>{
        if (err) throw new Error('Record not found!')
        res.json(result)
    })
    
})

// Create a new record
recordRoutes.route('/api/register').get((req, response)=>{
    let db_connect = dbo.get()
    let myNewObj = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        friends: [],
    }
    db_connect.collection('users').insertOne(myNewObj,
        (err, res)=>{
            if(err) throw err;
            response.json(res)
        }
    )
})

// Update a record
recordRoutes.route('/update/:id').put((req, response)=>{
    let db_connect = dbo.getDb()
    let myQuery = {_id: ObjectId(req.params.id)}

    let newValues = {
        $set:{
            username: req.body.name,
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
recordRoutes.route('/delete/:id').delete((req, response)=>{
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