let arr = [];
function setValue() {
  arr = document.getElementById("Array").value;
  document.getElementById("OP").innerText = arr;
  console.log(typeof arr);
  console.log(arr);
}

function sort() {
  let newArr = [];
  for (let k = 0; k < arr.length; k++) {
    newArr.push(parseInt(arr[k]));
  }
  console.log(newArr);

  let numberArr = [];
  for (let l = 0; l < newArr.length; l++) {
    if (isNaN(newArr[l])) {
      continue;
    } else {
      numberArr.push(newArr[l]);
    }
  }
  console.log(numberArr);
  console.log(typeof numberArr[0]);

  for (let i = 0; i < numberArr.length; i++) {
    for (let j = 0; j < numberArr.length - 1; j++) {
      if (numberArr[j] > numberArr[j + 1]) {
        let temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }
  console.log(numberArr);
  document.getElementById("Sorted").innerText = numberArr;
}
