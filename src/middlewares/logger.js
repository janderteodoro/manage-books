const morgan = require('morgan')

module.exports = morgan((tokens, request, response) => {

  return [
    `[${new Date().toISOString()}]`, // Adiciona a data e hora atual
    tokens.method(request, response), // Método HTTP (GET, POST, etc.)
    tokens.url(request, response), // URL da requisição
    tokens.status(request, response), // Status da resposta (200, 404, etc.)
    `${tokens['response-time'](request, response)} ms`, // Tempo de resposta em milissegundos
    `-`, // Separador
    tokens['remote-addr'](request, response), // Endereço IP do cliente
    `"${tokens['user-agent'](request, response)}"`, // User-Agent do cliente
  ].join(' ')
})