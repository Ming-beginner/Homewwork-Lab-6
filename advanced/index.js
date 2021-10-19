let shopItems = ["Quần bò", "Áo sơ mi", "Mũ len"];
let running = true

while (running) {
    let clientAction = prompt("Bạn muốn thực hiện thao tác gì?(nhập C, U, R, D)")
    if (clientAction == "C") {
        let newItemsNumber = Number(prompt("Nhâp số lượng sản phẩm mới"))
        for (let i = 0; i < newItemsNumber; i++) {
            let newItem = prompt("Nhập sản phẩm thứ" + String(i + 1))
            shopItems.push(newItem)
        }
        console.log("Danh sách sản phẩm của shop sau khi thêm sản phẩm: " + shopItems.join(", "))
    } else if (clientAction == "U") {
        let upgradeItemNumer = Number(prompt("Nhập số phần tử bạn muốn thay thế"))
        for (let i = 0; i < upgradeItemNumer; i++) {
            let itemNeedUpgrade = prompt("Nhập vị trí sản phẩm thứ " + String(i + 1) + " mà bạn muốn thay thế")
            let upgradeItem = prompt("Nhập sản phẩm bạn muốn dùng để thay thể")
            shopItems[itemNeedUpgrade] = upgradeItem
        }
        console.log("Danh sách sản phẩm của shop sau khi chỉnh sửa sản phẩm: " + shopItems.join(", "))
    } else if (clientAction == "R") {
        console.log("Danh sách sản phẩm của shop: " + shopItems.join(", "))
    } else if (clientAction == "D") {
        let itemNeedDelPosition = Number(prompt("Nhập vị trí sản phẩm bạn muốn xóa"))
        delete shopItems[itemNeedDelPosition]
        console.log("Danh sách sản phẩm của shop sau khi xóa: " + shopItems)
    } else {
        alert("Hệ thống không hiểu bạn")
    }
    let endProgram = prompt("Nhập 'N' để thoát, nhập bất cứ thứ gì để chỉnh sửa tiếp")
    if (endProgram == 'N') {
        running = false
    }
}