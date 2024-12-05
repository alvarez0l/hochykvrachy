const {Router} = require('express');
// const MONGODB_URI = 'mongodb+srv://admin:oGjp24HfB8Do0Pry@cluster109.ciqquwb.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster109';
// const MongoClient = require("mongodb").MongoClient;
const auth = require('../middleware/auth')
const User = require('../models/User')
const UserInfo = require('../models/UsersInfo')

const router = Router();

router.get('/medcard', auth, async(req, res) => {
    try {
        // const medCase = await UserInfo.findById('6677065dad64b36b37997eba');
        // console.log(medCase.medcard.case.title)
        res.render('account/medcard', {
            title: 'Хочу к врачу! - Личный кабинет',
            isAccount: true,
            user_id: req.session.user._id,
            user_name: req.session.user.name,
            user_lName: req.session.user.l_name,
            user_sName: req.session.user.s_name,
            user_email: req.session.user.email,
            user_tel: req.session.user.phone,
        })
    } catch (err) {
        console.log(err)
    }
});

router.get('/personal', auth, async(req, res) => {
    try {
        res.render('account/personal', {
            title: 'Хочу к врачу! - Личный кабинет',
            isAccount: true,
            user_id: req.session.user._id,
            user_name: req.session.user.name,
            user_lName: req.session.user.l_name,
            user_sName: req.session.user.s_name,
            user_email: req.session.user.email,
            user_tel: req.session.user.phone
        })
    } catch (err) {
        console.log(err)
    }
});

router.get('/security', auth, async(req, res) => {
    try {
        res.render('account/security', {
            title: 'Хочу к врачу! - Личный кабинет',
            isAccount: true,
            user_id: req.session.user._id,
            user_name: req.session.user.name,
            user_lName: req.session.user.l_name,
            user_sName: req.session.user.s_name,
            user_email: req.session.user.email,
            user_tel: req.session.user.phone
        })
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;