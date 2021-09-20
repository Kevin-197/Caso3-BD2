import {Router} from 'express'
import {addArticulo} from '../controllers/subastas.controller'

const router = Router();

router.post('/signup', addArticulo);

export default router;