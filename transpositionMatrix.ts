function getTranspositionMatrix(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let bufferVariable: number = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = bufferVariable;
    }
  }
  return matrix;
}
