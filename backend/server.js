// server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
const routes = require('./routes');
const setupWebSocket = require('./websockets/salesSocket');

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// WebSocket
const { broadcastSale } = setupWebSocket(server);
app.set('broadcastSale', broadcastSale); // To use in controllers if needed

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
