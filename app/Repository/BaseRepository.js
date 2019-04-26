/**
 * Created by Arlen on 12/01/2019.
 */

const singleton = Symbol();

class BaseRepository {

    constructor() {

    }

    static get Singleton() {
        if (!this[singleton]) {
            this[singleton] = this.getInstance;
        }

        return this[singleton];
    }

    static get Type(){}

    static get getInstance(){}

    get getModelName(){ }

    async Find(condition = {}, populate = null, select = null) {
    let myModel = db[this.getModelName];

    let query = myModel.findOne(condition);

    if ( select )
        query.select(select);

    if (populate) {
        query.populate(populate);
    }

    return query.exec();
}

    async FindAll(condition={}, limit = null, skip = null, populate = null, sort = {_id: -1}, select = null) {

    let myModel = db[this.getModelName];

    let query = myModel.find(condition);

    if ( sort )
        query.sort(sort);

    if ( limit )
        query.limit(+limit);
    if ( skip )
        query.skip(+skip);
    if ( populate )
        query.populate(populate);

    if ( select )
        query.select(select);

    return query.exec();
}

    async Create(record) {

    let myModel = new db[this.getModelName](record);

    const obj = await myModel.save();

    return obj;
}


    async Remove(id) {
    let myModel = db[this._model];

    return myModel.updateOne({_id: id}, {$set: {removed: true}}).exec();
}

    async RemoveAll(condition = {}) {
    let myModel = db[this._model];

    return myModel.updateMany(condition, {$set: {removed: true}}).exec();
}

    async Update(id, record, upsert = false) {
    let myModel = db[this._model];

    return myModel.updateOne({_id: id}, {$set: record},{ upsert: upsert}).exec();
}

}
module.exports = BaseRepository;