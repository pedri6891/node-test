/**
 * Created by Arlen on 15/03/2019.
 */


const request = require('request');
const path = require('path');
const enterpriseManager = require('./../../Repository/enterpriseManager')

class EnterpriseController {

    static Register(app){

        app.get('/home/enterprise/getAllEnterprise', this.LoadEnterprise)
        app.get('/home/enterprise/getEnterpriseByID', this.EnterpriseByID)

    }

    static async LoadEnterprise(req, res) {
    try {

        const result = await enterpriseManager.Singleton.FindAll();
        res.json({result});

    }
    catch (e) {
        console.log(e);
    }
}

    static async EnterpriseByID(req, res){
    try{

        let enterpriseid = req.body.enterpriseid
        const result = await enterpriseManager.Singleton.Find({_id: enterpriseid});

        res.json({result});
    }
    catch (e) {
        console.log(e)
    }
}
}

module.exports = EnterpriseController;
