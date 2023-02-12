const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(403).json({msg: 'Invalid Token!'})
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, data)=>{
        if(err) return res.status(403).json({msg: 'Wrong or expired token'})
        req.user = data
        next()
    })


}

module.exports = verifyToken
