const {Router} = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {body, validationResult} = require('express-validator')
const {registerValidators} = require('../utils/validators')

const router = Router();

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'Хочу к врачу! - Авторизация',
        isLogin: true,
        logError: req.flash('logError')
    })
});

router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login')
    })
});

router.get('/register', async(req, res) => {
    res.render('auth/register', {
        title: 'Хочу к врачу! - Регистрация',
        isLogin: true, 
        regError: req.flash('regError')
    })
});

// router.post('/', (req, res) => {
//     console.log(req.body)

//     res.redirect('/')
// });

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body  //Take user_info from html.Body
        const candidate = await User.findOne({ email })  //Find user with this email

        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate.password)  //Comparison with DB
            
            if (areSame) {
                req.session.user = candidate
                req.session.isAuthenticated = true  //Add session token
                req.session.save(err => {
                    if (err) {
                        throw err
                    }
                    res.redirect('/')
                })
            } else {
                req.flash('logError', 'Неверный логин или пароль')
                res.redirect('/auth/login')
            }
        } else {
            req.flash('logError', 'Неверный логин или пароль')
            res.redirect('/auth/login')
        }
    } catch (e) {
        console.log(e)
    }
});


router.post('/register', registerValidators, async(req, res) => {  //Function for register a new user
    try {
        
        const {name, l_name, s_name, phone, email, password, repeat} = req.body  //Take user_info from html.Body
        const pass = req.body.repeat  //Check a repeat pass
        const candidate = await User.findOne({ email })  //Find user with this email

        const errors = validationResult(req)  //Validation
        if (!errors.isEmpty()) {  //Error
            req.flash('regError', errors.array()[0].msg)
            return res.status(422).redirect('/auth/register')
        }

        if (pass != password) {  //If "repeat" not a pass
            req.flash('regError', 'Пароли не совпадают')
            res.redirect('/auth/register')
        } else {
            if (candidate) {
                req.flash('regError', 'Пользователь с такой почтой уже существует')
                res.redirect('/auth/register')
            } else {
                const passwordHash = await bcrypt.hash(password, 10)  //Hashing a user pass
                const user = new User({  //Add new user on DB
                    name, l_name: req.body.l_name, s_name: req.body.s_name, phone: req.body.phone, email, password: passwordHash, cart: {items: []}
                })
                await user.save()  //Save on DB
                res.redirect('/auth/login')
            }
        }
    } catch (e) {
        console.log(e)
    }
});



module.exports = router;