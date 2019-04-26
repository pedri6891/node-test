/**
 * Created by Arlen on 15/03/2019.
 */


const userRepository = require('../Repository/userRepository')

class HomeController {

    static Register(app){

        app.get('/home/get-all-users', this.LoadUsers)
        app.post('/home/createuser', this.CreateUser)

    }

    static async CreateUser(req, res){

    try{
        const record = {
            nombre: "Pedro",
            password:'la fruta',
            rol:['Admin', 'User', 'Root']
        };


        const result = await userRepository.Singleton.Create(record);

        res.json({result});
    }
    catch (e) {
        console.log(e)
    }
}


    static async LoadUsers(req, res) {
    try {

        const result = await userRepository.Singleton.FindAll();
        res.json({result});

    }
    catch (e) {
        console.log(e);
    }
}


}

module.exports = HomeController;









