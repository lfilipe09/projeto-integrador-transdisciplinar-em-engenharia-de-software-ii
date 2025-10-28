const { Router } = require('express');
const { list, create, remove, update } = require('../controllers/noteController');

const router = Router();

router.get('/', list);
router.post('/', create);
router.delete('/:id', remove);
router.put('/:id', update);

module.exports = router;
