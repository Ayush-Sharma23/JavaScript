let arr = [5, 4, 3, 2, 1];

console.log(arr);

//Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

arr = [5, 4, 3, 2, 1];
function selectionSort(arr,size) {
    
    for (let step=0;step<size;step++){
        let min_index = step;
        for (let k=step+1;k<size;k++){
            if (arr[k]<arr[step]){
                min_index =k;
            }
        }
        [arr[min_index],arr[step]] = [arr[step],arr[min_index]];
    }

    return arr;
    
}

console.log(selectionSort(arr,arr.length))

// arr = [5, 4, 3, 2, 1];

function insertionSort(arr,size){
    for (let step=1;step<size;step++){
        let key =arr[step];
        j = step-1;

        while (j>=0 && key < arr[j]){
                arr[j+1] = arr[j];
                j= j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log(insertionSort(arr,arr.length))

arr = [5, 4, 3, 2, 1];

function merge(left,right){
  let sortedArray = [];

  while (left.length && right.length){
    if (left[0]<right[0]){
      sortedArray.push(left.shift());
    }
    else{
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray,...left,...right]
}
function mergeSort(arr){
  if (arr.length <=1) return arr;
  
  let mid =  Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left,right);
}

console.log(mergeSort(arr))

function quickSort(){
  //TODO : To be continued...
}




