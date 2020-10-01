

exports.min = function min (array = undefined) {

  if(!Array.isArray(array) || array.length === 0) return 0;
  let minValue = Math.min(...array);
  return minValue;
}

exports.max = function max (array = undefined) {
  if(!Array.isArray(array) || array.length === 0) return 0;
  let maxValue = Math.max(...array);
  return maxValue;
}

exports.avg = function avg (array = undefined) {
  if(!Array.isArray(array) || array.length === 0) return 0;
  let sumArrayElements = 0;
  let avg;
  for (let i = 0; i < array.length; i++) {
    sumArrayElements += array[i];
    
  }
  avg = sumArrayElements / array.length
  return avg;
}
