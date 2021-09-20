import {Router} from 'express'
import {addArticulo, showAll, removeArticulo, addOffer, findArticulo} from '../controllers/subastas.controller'

const router = Router();

router.post('/add', addArticulo);

router.post('/remove', removeArticulo);

router.post('/offer', addOffer);

router.get('/show', showAll);

router.get('/find', findArticulo);

export default router;