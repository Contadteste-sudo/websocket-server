const WebSocket = require('ws');

const port = process.env.PORT || 10000;

const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (msg) => {
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });
});

console.log("Servidor rodando na porta", port);