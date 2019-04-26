/**
 * Created by Arlen on 15/03/2019.
 */

const BaseModel = require('./BaseModel');

class ObraModel extends BaseModel{
    constructor(mongoose) {
        super(mongoose, 'Obra');
    }

    Initialize() {
        const Obra = new this.Schema({
            nombre: {type: String, required: true},
            annoinicio: {type: Number},
            annofin: {type: Number},
            montoinversion: {type: Number, required: true},
            longitud: {type: Number, required: true},
            transitodiarioestimado: {type: Number, required: true},
            //empresa: {type: this.Schema.Types.ObjectId, ref: 'Enterprise'},
            tiempotrasladoanterior : {type: Number},
            tiempotrasladoactual : {type: Number},
            fechaentrega : {type: Date,
                default: Date.now}
        });

        return this.mongoose.model(this.name, Obra);
    }
}

module.exports = ObraModel;

