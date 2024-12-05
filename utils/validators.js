const {body, validationResult} = require('express-validator')

exports.registerValidators = [
    body('email').isEmail().withMessage('Введите корректный E-mail'),
    body('password', 'Пароль состоять минимум из 5 символов, но не более 32').isLength({min: 5, max: 32}).isAlphanumeric(),
    body('name', 'Имя должно состоять минимум из 3-х символов, но не более 36').isLength({min: 3, max: 36})
]