export const isNumber = number => {
  if (isNaN(parseFloat(number)) || isNaN(number - 0)) {
    return false;
  }
  return true;
}
