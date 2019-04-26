/**
 * Created by Arlen on 15/03/2019.
 */


const config = require('./../config.json')
const userManager = require('../app/Repository/userRepository')


let checkSecurity = function (req, res, next) {

    let user = req.body.username || req.session.user,
        pass = req.body.password || req.session.password

    usuarioManager.getUserNameAndPass(user, pass)
        .then(result=>{


        if(result.data != null){
        req.session.user = result.data.nombre
        req.session.rol = result.data.rol
        req.session.password = pass

        return next();
    }
    else{
        req.session.user = null
        req.session.password = null
        return res.redirect('/')
    }
})

}

module.exports = checkSecurity

