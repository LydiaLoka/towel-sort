
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrTranspond = [];
  for(i=0; i<matrix.length; i++){
  if (i % 2 != 0) {
      arrTranspond.push(matrix[i].reverse());
  } else {
      arrTranspond.push(matrix[i]);
  };
  };    
return arrTranspond.flat();

  }