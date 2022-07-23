const flipcoin = (p = 0.5) => {
  if (Number.isNaN(p) || p < 0 || p > 1) {
    return Math.random() < 0.5
  }
  return Math.random() < p
}

export default flipcoin
