const router = require('express').Router();
const { User, Article, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll({
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/signup', async (req, res) => {
    try{
        const newUser = await User.create(req.body);
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.logged_in = true;
            res.json({
                user: newUser,
                message: 'You are logged in'
            });
        }) 
    } catch (err) {
        res.status(400).json(err);
    }
});



router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({
            where: {
                user_name: req.body.userName,
            }
        });

        if(!userData){
            res.status(400).json({
                message: 'incorrect username / password'
            });
            return;
        } 
        const validPw = await userData.checkPassword(req.body.passWord);
        if(!validPw){
            res.status(400).json({
                message: 'incorrect username / password'
            });
            return;
        }
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.logged_in = true;
            res.json({
                user: userData,
                message: 'You are logged in'
            });
        }) 
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;