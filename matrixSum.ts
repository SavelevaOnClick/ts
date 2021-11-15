function getMatrixAddition(
  matrix1: number[][],
  matrix2: number[][]
): number[][] {
  const matrixResult: number[][] = [];
  for (let i = 0; i < matrix1.length; i++) {
    matrixResult.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      matrixResult[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return matrixResult;
}
