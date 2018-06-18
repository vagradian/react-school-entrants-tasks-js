/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [[]];

  let rows = n;
  let cols = n;

  for (let row = 0; row < rows; row++) {
    result[row] = [];
    for (let col = 0; col < cols; col++) {
      result[row][col] = 0;
    }
  }

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  let index = 1;
  let direction = 0;
  while (top <= bottom && left <= right) {
    switch (direction % 4) {
      case 0:
        for (let col = left; col <= right; col++) {
          result[top][col] = index++;
        }
        top++;
        direction++;
        break;
      case 1:
        for (let row = top; row <= bottom; row++) {
          result[row][right] = index++;
        }
        right--;
        direction++;
        break;
      case 2:
        for (let col = right; col >= left; col--) {
          result[bottom][col] = index++;
        }
        bottom--;
        direction++;
        break;
      default:
        for (let row = bottom; row >= top; row--) {
          result[row][left] = index++;
        }
        left++;
        direction++;
        break;
    }
  }

  result.map(r => r.join(' ')).join('\n');

  return result;
}

console.log(fillSpiralMatrix(5));

export default fillSpiralMatrix;
