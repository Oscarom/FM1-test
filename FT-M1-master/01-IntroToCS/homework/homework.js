'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 return parseInt(num, 2);

}

function DecimalABinario(num) {
  // tu codigo aca
  return (num >>> 0).toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}