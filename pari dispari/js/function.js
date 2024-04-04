/**
 * Description: una funzione che genera numeri random tra 1 e 5
 * @returns {number} 
 */
function numRandom() {
  return Math.floor(Math.random() * 5) + 1; 
}

/**
 * Description: verifica che una numero è pari
 * @param {number}
 * @returns {boolean}
 */
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
