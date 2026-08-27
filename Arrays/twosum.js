function twoSum(arr, d) {
  const map = new Map();

  for (let num of nums) {
    const need = target - num;

    if (map.has(need)) {
      return [map.get(need), num];
    }

    map.set(num, num );
  }

  return [];
}

console.log(twoSum([1,2,3,5,7],4))