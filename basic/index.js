//Ex1:

let customerNumber = Number(prompt("Bài 1: Nhập số lượng khách mời"))
let pizzaNumber = Number(prompt("Nhập số lương pizza"))
let result = (pizzaNumber * 8) / customerNumber
console.log("Bài 1: \n")
console.log("Bài 1: Trung bình, mỗi người có thể ăn " + String(result) + " miếng pizza")

//==========================================================================================================

//Ex2:

let temperature = Number(prompt("Bài 2: Nhập nhiệt độ hôm nay"))
let result2 = ""
if (temperature >= 25 && temperature <= 40) {
    result2 = "Nóng"
} else if (temperature < 25 && temperature >= 15) {
    result2 = "Mát"
} else if (temperature < 15 && temperature >= 0) {
    result2 = "Lạnh"
} else if (temperature < 0 && temperature >= -12) {
    result2 = "Siêu lạnh"
} else {
    result2 = "Không sống được"
}
console.log("Bài 2: Hôm nay trời " + String(result2))

//===========================================================================================================

//Ex3:

console.log("Bài 3: \n")
for (let i = 0; i < 10; i++) {
    let userName = prompt("Bài 3: Nhập tên người dùng")
    console.log(userName)
}

//===========================================================================================================

//Ex4:

let bookNumber = Number(prompt("Bài 4: Nhập số sách bạn muốn nhập"))
let i = 1
let bookCase = []
console.log("Bài 4:")
while (i <= bookNumber) {
    let bookInfo = prompt("Nhập thông tin của quyển sách thứ " + String(i))
    console.log("Quyển " + String(i) + ":" + bookInfo)
        //============================================================================
    let bookName = prompt("Bài 5: Nhập tên của quyển sách thứ " + String(i))
    bookCase.push(bookName)
    i++
}

console.log("Bài 5: \n", bookCase)