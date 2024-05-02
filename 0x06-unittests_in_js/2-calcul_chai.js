function calculateNumber(type, a, b) {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE' && Math.round(b) === 0) {
    return 'Error'
  } else {
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;
