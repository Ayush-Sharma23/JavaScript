let count = 0;
function change(if_inc = true) {
  if (if_inc) {
    count++;
    document.getElementById("Count").innerText = count;
  } else {
    count = 0;
    document.getElementById("Count").innerText = count;
  }
}
