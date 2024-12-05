const {Router} = require('express');
const Schedule = require('../models/Schedule');
const auth = require('../middleware/auth');

const router = Router();

router.get('/', auth, async(req, res) => {
    //const schedule = await Schedule.find();
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
    //const med1 = await Schedule.findById('6675752e5734c8ff35e58b49');
    //const med10 = (med1.fio, med1.time);
    res.render('schedule', {
        title: 'Хочу к врачу! - Расписание',
        isSchedule: true,
        mp_1: {
            fio: medPers_1.fio, 
            time: medPers_1.time,
            date: medPers_1.date,
            jobtitle: medPers_1.jobTitle
        },
        mp_2: {
            fio: medPers_2.fio, 
            time: medPers_2.time,
            date: medPers_2.date,
            jobtitle: medPers_2.jobTitle
        },
        mp_3: {
            fio: medPers_3.fio, 
            time: medPers_3.time,
            date: medPers_3.date,
            jobtitle: medPers_3.jobTitle
        },
        mp_4: {
            fio: medPers_4.fio, 
            time: medPers_4.time,
            date: medPers_4.date,
            jobtitle: medPers_4.jobTitle
        },
        mp_5: {
            fio: medPers_5.fio, 
            time: medPers_5.time,
            date: medPers_5.date,
            jobtitle: medPers_5.jobTitle
        },
        mp_6: {
            fio: medPers_6.fio, 
            time: medPers_6.time,
            date: medPers_6.date,
            jobtitle: medPers_6.jobTitle
        },
        mp_7: {
            fio: medPers_7.fio, 
            time: medPers_7.time,
            date: medPers_7.date,
            jobtitle: medPers_7.jobTitle
        },
        mp_8: {
            fio: medPers_8.fio, 
            time: medPers_8.time,
            date: medPers_8.date,
            jobtitle: medPers_8.jobTitle
        },
        mp_9: {
            fio: medPers_9.fio, 
            time: medPers_9.time,
            date: medPers_9.date,
            jobtitle: medPers_9.jobTitle
        },
        mp_10: {
            fio: medPers_10.fio, 
            time: medPers_10.time,
            date: medPers_10.date,
            jobtitle: medPers_10.jobTitle
        }
    })
});

module.exports = router;