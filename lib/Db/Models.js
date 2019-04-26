const enterpriseModel = require('../../app/models/enterpriseModel');
const obraModel = require('../../app/models/obraModel');
const userModel = require('../../app/models/userModel');


class Models {

    static Load(mongoose) {
        return {
            mongoose: mongoose,
            Enterprise: new enterpriseModel(mongoose),
            Obra: new obraModel(mongoose),
            User: new userModel(mongoose),
        }
    }
}

module.exports = Models;
