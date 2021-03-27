import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
    res.send({ msg: 'index page' });
});

export default router;
