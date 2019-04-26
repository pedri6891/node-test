/**
 * Created by Arlen on 17/03/2019.
 */

const userManager = require('../Repository/userRepository')
const security = require('./../../lib/requestScurity')
const request = require('request');
const path = require('path');

class AdminController {

    static Register(app){

        app.get('/admin/', this.renderLogin)
        app.get('/admin/' + 'login',security, this.login)
        app.get('/admin/', this.app)
        app.get('/admin/', this.logout)

    }

    static async renderLogin(req, res) {
    try {

        res.render('seguridad/login');

    }
    catch (e) {
        console.log(e);
    }
}

    static async login(req, res) {
    try {

        if (req.session.user != null)
            res.json({success: true, message: 'Successfull authenticated...!'})
        else
            res.json({success: false, message: 'Failure authenticated...!'})
    }
    catch (e) {
        console.log(e)
    }
}

    static async app(req, res){
    res.render('admin/dashboard')

    }

    static async logout(req, res){
    req.session.user = null;
    req.session.password = null
    res.redirect('/')

}
}

module.exports = AdminController;


