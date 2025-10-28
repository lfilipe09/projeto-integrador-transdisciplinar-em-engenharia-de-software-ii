const app = require('./app');
const { connect } = require('./db');

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    if (process.env.MONGODB_URI) {
      await connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB');
    } else {
      console.warn('MONGODB_URI not set. API data routes will return 503.');
    }
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
