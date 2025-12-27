export function addCoins(amount) {
  let c = parseInt(localStorage.getItem('smartcoins') || '0');
  localStorage.setItem('smartcoins', c + amount);
}