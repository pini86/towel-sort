
module.exports = function towelSort (matrix) {
  let outArray = [];

  if (!matrix || !matrix.length){
    return outArray
  } 

  function sort (tempRow, current, numRow) {
    return tempRow.concat( ( ( numRow % 2 ) ? current.reverse() : current ) );//если строка нечетная - в обратном порядке, иначе - копируем её как есть
  }

  outArray = matrix.reduce( sort , [] );

  return outArray;
}
