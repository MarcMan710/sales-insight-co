// websockets/salesSocket.js
let clients = [];

function setupWebSocket(server) {
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');
    clients.push(ws);

    ws.on('close', () => {
      console.log('Client disconnected');
      clients = clients.filter(client => client !== ws);
    });
  });

  return {
    broadcastSale(sale) {
      const message = JSON.stringify({ type: 'NEW_SALE', payload: sale });
      clients.forEach(client => {
        if (client.readyState === 1) client.send(message);
      });
    }
  };
}

module.exports = setupWebSocket;
