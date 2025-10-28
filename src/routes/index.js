const { Router } = require('express');
const { health } = require('../controllers/healthController');

const router = Router();

router.get('/health', health);

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API 👋' });
});

module.exports = router;
