/**
 * Created by Arlen on 15/03/2019.
 */

const BaseManager = require('./BaseRepository')

class EnterpriseRepository extends BaseManager {

    static getModelName(){
        return 'Enterprise';
    }
}

module.exports = EnterpriseRepository;
