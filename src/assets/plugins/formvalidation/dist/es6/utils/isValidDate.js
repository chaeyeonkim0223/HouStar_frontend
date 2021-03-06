export default function t(t, e, n, r) {
  if (isNaN(t) || isNaN(e) || isNaN(n)) {
    return false;
  }
  if (t < 1e3 || t > 9999 || e <= 0 || e > 12) {
    return false;
  }
  const s = [
    31,
    t % 400 === 0 || (t % 100 !== 0 && t % 4 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (n <= 0 || n > s[e - 1]) {
    return false;
  }
  if (r === true) {
    const r = new Date();
    const s = r.getFullYear();
    const a = r.getMonth();
    const u = r.getDate();
    return t < s || (t === s && e - 1 < a) || (t === s && e - 1 === a && n < u);
  }
  return true;
}
