const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('authors', {
        title: 'Хочу к врачу! - Авторы',
        isAuthors: true
    })
});

module.exports = router;