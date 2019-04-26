/**
 * Created by Arlen on 15/03/2019.
 */

const BaseRepository = require('./BaseRepository')

class UserRepository extends BaseRepository {

    get getModelName(){
        return 'User';
    }

    static get getInstance(){
        return new UserRepository();
    }

    static get Type(){ return 'UserRepository'}

}

module.exports = UserRepository;
