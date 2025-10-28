const mongoose = require('mongoose');

let isConnected = false;

async function connect(uri) {
  if (isConnected) return mongoose.connection;
  if (!uri) throw new Error('MONGODB_URI not set');
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, {
    autoIndex: true,
  });
  isConnected = true;
  return mongoose.connection;
}

function connectionStatus() {
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  return mongoose.connection.readyState;
}

module.exports = { connect, connectionStatus };
