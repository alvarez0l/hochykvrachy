const {Router} = require('express');
const Sign = require('../models/Sign')
const Schedule = require('../models/Schedule')
const auth = require('../middleware/auth')

const router = Router();

router.get('/', auth, async(req, res) => {
    const medPers_1 = await Schedule.findById('6675752e5734c8ff35e58b49');
    const medPers_2 = await Schedule.findById('66759bf45734c8ff35e58b4b');
    const medPers_3 = await Schedule.findById('66759bf95734c8ff35e58b4c');
    const medPers_4 = await Schedule.findById('66759bfb5734c8ff35e58b4d');
    const medPers_5 = await Schedule.findById('66759d2e5734c8ff35e58b4e');
    const medPers_6 = await Schedule.findById('66759d315734c8ff35e58b4f');
    const medPers_7 = await Schedule.findById('6679e96a53f2e37124b0e07f');
    const medPers_8 = await Schedule.findById('6679e9cc53f2e37124b0e080');
    const medPers_9 = await Schedule.findById('6679eaa153f2e37124b0e081');
    const medPers_10 = await Schedule.findById('6679eb0253f2e37124b0e082');
    res.render('sign', {
        title: 'Хочу к врачу! - Записаться',
        isSign: true,
        med_1: medPers_1.fio,
        med_2: medPers_2.fio,
        med_3: medPers_3.fio,
        med_4: medPers_4.fio,
        med_5: medPers_5.fio,
        med_6: medPers_6.fio,
        med_7: medPers_7.fio,
        med_8: medPers_8.fio,
        med_9: medPers_9.fio,
        med_10: medPers_10.fio,
        signError: req.flash('signError')
    })
});

router.post('/', async(req, res) => {
    try {
        const {signType, doc, date, time} = req.body
        if (date == '' || time == '') {
            req.flash('signError', 'Заполните поля')
            res.redirect('/sign')
        } else {
            const sign = new Sign({
                signes: {
                    signType: req.body.signType, doc: req.body.doc, date: req.body.date, time: req.body.time, user: req.session.user._id, cart: {items: []}
                }
            })
            await sign.save()
            console.log("Sign is added on DB successfully")
            res.redirect('/')
        }
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;

