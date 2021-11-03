import { Router } from "express";

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/frases', ApiController.createFrase)
router.get('/frases', ApiController.allFrases)

router.get('/frase/aleatoria', ApiController.radomFrase)

router.get('/frase/:id', ApiController.getFrase)
router.put('/frase/:id', ApiController.updateFrase)
router.delete('/frase/:id', ApiController.deleteFrase)


export default router;