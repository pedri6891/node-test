/**
 * Created by Arlen on 15/03/2019.
 */
"use strict";
const BaseRepository = require('./BaseRepository')

class ObraRepository extends BaseRepository {

    get getModelName(){
        return 'Obra';
    }

    static get getInstance(){
        return new ObraRepository();
    }

    static get Type(){ return 'ObraRepository'}


    static async CrearObra(obraObj){
        let enterprise = await enterpriseManager.create(obraObj)

        let toSave = new db.Obra({
            nombre: obraObj.nombre,
            annoinicio: obraObj.annoinicio,
            annofin: obraObj.annofin,
            montoinversion: obraObj.montoinversion,
            longitud: obraObj.longitud,
            transitodiarioestimado: obraObj.transitodiarioestimado,
            empresa: enterprise._id,
            tiempotrasladoanterior: obraObj.tiempotrasladoanterior,
            tiempotrasladoactual: obraObj.tiempotrasladoactual,
            fechaentrega: obraObj.fechaentrega,
        });


        let obra = await toSave.asyncSave()

        return{
            data: obra , message:'successful creation'
        }

    }
}

module.exports = ObraRepository;
