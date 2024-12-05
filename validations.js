const { body } = require('express-validator');

exports.loginValidation = [
    body('email', 'Некоректный формат почты').isEmail(),
    body('password', 'Пароль должен состоять минимум из 5 символов').isLength({ min: 5 }),
];

exports.registerValidation = [
    body('email', 'Некоректный формат почты').isEmail(),
    body('password', 'Пароль должен состоять минимум из 5 символов').isLength({ min: 5 }),
    body('fullName', 'Укажите имя, содержащее более 3-х символов').isLength({ min: 3 }),
    body('avatarUrl', 'Неверный URL-адрес').optional().isURL(),
];