/**
 * Created by Arlen on 15/03/2019.
 */

const BaseModel = require('./BaseModel');

class UserModel extends BaseModel{
    constructor(mongoose) {
        super(mongoose, 'User');
    }

    Initialize() {
        const User = new this.Schema({
            nombre: {type: String, unique: true, required: true},
            password: {type: String, required: true},
            rol: [{
                type: String,
                enum: ['Admin', 'User', 'Root']
            }]
        });

        return this.mongoose.model(this.name, User);
    }
}


module.exports = UserModel;

