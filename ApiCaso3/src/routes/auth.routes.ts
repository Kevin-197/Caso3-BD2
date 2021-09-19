import {Router} from 'express'
import {addArticulo, showAll, removeArticulo, addOffer} from '../controllers/subastas.controller'

const router = Router();

router.post('/add', addArticulo);

router.post('/remove', removeArticulo);

router.post('/offer', addOffer);

router.get('/show', showAll);

export default router;