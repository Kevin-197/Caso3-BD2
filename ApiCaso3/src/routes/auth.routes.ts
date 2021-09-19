import {Router} from 'express'
import {addArticulo, showAll} from '../controllers/subastas.controller'

const router = Router();

router.post('/add', addArticulo);

router.get('/show', showAll);

export default router;