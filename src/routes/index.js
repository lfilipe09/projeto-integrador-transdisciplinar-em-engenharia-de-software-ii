const { Router } = require('express');
const { health } = require('../controllers/healthController');
const notesRouter = require('./notes');

const router = Router();

router.get('/health', health);

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API 👋' });
});

// Notes CRUD (minimal)
router.use('/notes', notesRouter);

module.exports = router;
