const { MongoClient } = require('mongodb')
const Db = process.env.ATLAS_URI
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var _db;

module.exports = {
    connectToServer: (callback)=>{
        client.connect((err, db)=>{
            if(db){
                _db = db.db("social_media")
                console.log('Database connnected!')
            }
            return callback(err)
        })
    },

    getDb: ()=>{
        return _db;
    }

}