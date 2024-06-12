const swap = (arr,index1, index2) => {

}let temp = arr[index1];

const divide = (arr, left, right) => {
  let pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;

  while(leftStartIndex) <= rightStartIndex {
    while(leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    while(rightStartIndex ) >=left
  }
};

const quickSort = (arr, left, right) => {
  // 예외조항처리
  if (left <= right) {
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
};
