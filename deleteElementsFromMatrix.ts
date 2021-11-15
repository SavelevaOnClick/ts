function deleteStringMatrix(matrix: number[][]): number[][] {
  let counter: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
    if (counter > 0) {
      matrix.splice(i, 1);
      counter = 0;
    }
  }
  return matrix;
}

function deleteColumnMatrix(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let item = j;
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].splice(item, 1);
        }
      }
    }
  }
  return matrix;
}
