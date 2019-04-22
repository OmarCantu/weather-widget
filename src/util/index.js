/**
 * Checks if variable is number or string of number
 * 
 * Returns true if variable is number or string of number, 
 * otherwise returns false.
 *
 * @param {Number || String} number  Number variable
 * 
 * @return {boolean}        
*/
export const isNumber = number => {
  if (isNaN(parseFloat(number)) || isNaN(number - 0)) {
    return false;
  }
  return true;
}
