let arr = [];

// Tạo ra 1 mảng với với 200 phần từ và các số nhỏ hơn 100
function createNumberRandom() {
  let i;
  for (i = 0; i < 10; i++) {
    let createANumberRandom = Math.floor(Math.random() * 101);
    arr.push(createANumberRandom);
  }
}
//Sắp xếp mảng theo thứ tự giảm dần
function sortArr() {
  let len = arr.length;
  for (let i = 0; i <= len; i++) {
    for (let j = i + 1; j <= len; j++) {
      //Kiểm tra xem giá trị tại vị trí thứ i và j nếu giá thứ i < j thì đổi chỗ 2 giá trị cho nhau
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

createNumberRandom();
document.getElementById("notSort").innerHTML = arr;
sortArr();
document.getElementById("sort").innerHTML = arr;
document.getElementById("sum").innerHTML += arr[2] + arr[arr.length - 2];
