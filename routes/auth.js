/*
    Rutas de Usuario /Auth
    host + /api/auth
*/


const { Router } = require('express');
const { check } =  require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
    '/new',
    [// middlewares
        check('name','nombre es obligatorio').not().isEmpty(),
        check('email','email es obligatorio').isEmail(),
        check('password','el password debe ser de 5 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);

router.post('/',
    [
        check('email','email es obligatorio').isEmail(),
        check('password','el password debe ser de 5 caracteres').isLength({ min: 6 }),
        validarCampos
    ]
    ,loginUsuario
);

router.get('/renew', revalidarToken);


module.exports = router;