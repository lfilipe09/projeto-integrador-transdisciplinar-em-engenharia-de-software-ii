const { Router } = require('express');
const { list, create } = require('../controllers/noteController');

const router = Router();

router.get('/', list);
router.post('/', create);

module.exports = router;
