/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
  let arr2Set = new Set(arr2);

  let arr1Length = arr1.length;
  let arr2Length = arr2Set.size;

  if (arr1Length !== arr2Length) {
    return false
  }

  let diff = arr1.filter((item) => {
    return !arr2Set.has(item);
  });

  if (diff.length !== 0) {
    console.log('There are no ' + diff + ' in other array');
    return false
  }

  return true
}

haveSameItems([2, 5, 9, 4], [2, 5, 9, 4, 4]);

export default haveSameItems;
