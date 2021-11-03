const flipcoin = (p = 0.5) => {
  p = isNaN(p) ? 0.5 : 0 <= p && p <= 1 ? p : 0.5;
  return Math.random() < p;
};

export default flipcoin;
