
const homeController = require('./../app/controllers/homeController');
const obraController = require('./../app/controllers/obraController');
const adminController = require('./../app/controllers/adminController');


let configRoutes = (app)=> {
    homeController.Register(app);
    adminController.Register(app);
    obraController.Register(app);
};

module.exports = configRoutes;


