const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Хочу к врачу! - Главная',
        isHome: true
    })
});

module.exports = router;