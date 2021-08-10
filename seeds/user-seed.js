const {User} = require('../models');

const UserData = [
    {
        
        user_name: 'jafettyguap',
        email: 'jafet@hotmail.com',
        password: '123pass'
    },
    {
        
        user_name: 'NOTJafettyguap',
        email: 'NOTjafet@hotmail.com',
        password: 'NOT123pass'
    }
]

const seedUserData = () => User.bulkCreate(UserData);

module.exports = seedUserData;