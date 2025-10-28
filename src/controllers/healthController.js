const { connectionStatus } = require('../db');

function health(req, res) {
  const code = connectionStatus();
  const map = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const db = { code, status: map[code] };
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: Date.now(), db });
}

module.exports = { health };
