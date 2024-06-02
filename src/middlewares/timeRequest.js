/* eslint-disable no-undef */
module.exports = (request, response, next) => {
  const start = process.hrtime()

  response.on('finish', () => {
    const diff = process.hrtime(start)
    const time = diff[0] * 1e3 + diff[1] * 1e-6;
    console.log(`Request to ${request.originalUrl} took ${time.toFixed(2)} ms`);
  })

  next()
} 