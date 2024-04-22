function fibs(n) {
  let arr = [0, 1];
  if (n === 0) {
    arr = [];
  } else if (n === 1) {
    arr = [0];
  } else {
    for (let i = 1; i < n - 1; i++) {
      arr.push(arr[i - 1] + arr[i]);
    }
  }
  return arr;
}
//console.log(fibs(8));

function rFibs(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let arr = rFibs(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}
//console.log(rFibs(8));

function merge(leftArr, rightArr) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }

  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

//console.log(merge([3,5],[5,4]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

//console.log(mergeSort([105, 79, 100, 110]));

