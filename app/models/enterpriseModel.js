/**
 * Created by Arlen on 15/03/2019.
 */
const BaseModel = require('./BaseModel');

class EnterpriseModel extends BaseModel{
    constructor(mongoose) {
        super(mongoose, 'Enterprise');
    }

    Initialize() {
        const Enterprise = new this.Schema({
            name: {type: String, unique: true, required: true}
        });

        return this.mongoose.model(this.name, Enterprise);
    }
}


module.exports = EnterpriseModel;



