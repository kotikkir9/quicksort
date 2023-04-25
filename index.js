function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function qs(arr, low, high) {
  if (low >= high) return;

  let index = low - 1;
  const pivot = arr[high];
  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      index++;
      if (index === i) continue;
      swap(arr, i, index);
    }
  }

  index++;
  arr[high] = arr[index];
  arr[index] = pivot;

  qs(arr, low, index - 1);
  qs(arr, index + 1, high);
}

function qs2(arr, low, high) {
  if (low >= high) return;
  
  let [pivot, i, j] = [arr[low], low, high];

  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, low, j);

  qs2(arr, low, j);
  qs2(arr, j + 1, high);
}

const arr = [4, 3, 9, 2, 1, 6, 1, 2, 34, 31];
const arr2 = Array.from(arr);

qs(arr, 0, arr.length - 1);
qs2(arr2, 0, arr.length);
console.log(arr);
console.log(arr2);
