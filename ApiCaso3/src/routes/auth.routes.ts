import {Router} from 'express'
import {addArticulo, showAll, showAllJSON, removeArticulo, addOffer, findArticulo, findArticuloJSON} from '../controllers/subastas.controller'

const router = Router();

router.post('/add', addArticulo);

router.post('/remove', removeArticulo);

router.post('/offer', addOffer);

router.get('/show', showAll);
router.get('/showJSON', showAllJSON);

router.get('/find', findArticulo);
router.get('/findJSON', findArticuloJSON);

export default router;