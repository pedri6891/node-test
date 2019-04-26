/**
 * Created by Arlen on 15/03/2019.
 */

class BaseModel {
    constructor(mongoose, name) {
        this.mongoose = mongoose;
        this.Schema = mongoose.Schema;
        this.name = name;
        return this.Initialize();
    }


    Initialize() {

    }
}

module.exports = BaseModel;