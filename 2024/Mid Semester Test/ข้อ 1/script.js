// Total Product Amount
let productAmount1 = 3;
let productAmount2 = 3;
let productAmount3 = 3;

// Amount Left Displays and Buy Buttons
const amountLeft1 = document.getElementById("amountLeft1");
const buyButton1 = document.getElementById("buyButton1");

const amountLeft2 = document.getElementById("amountLeft2");
const buyButton2 = document.getElementById("buyButton2");

const amountLeft3 = document.getElementById("amountLeft3");
const buyButton3 = document.getElementById("buyButton3");

// Product Names
const productName1 = document.getElementById("productName1");
const productName2 = document.getElementById("productName2");
const productName3 = document.getElementById("productName3");

// Button Event
buyButton1.addEventListener('click', function () {

    amountLeft1.innerHTML = productAmount1;
    productAmount1--;

    if (productAmount1 > 0) {
        amountLeft1.innerHTML = productAmount1;
        alert(`คุณได้ซื้อสินค้า ${productName1.textContent} อย่างสำเร็จ!\nสินค้าเหลืออยู่ ${productAmount1} ตัว`);
    } else {
        amountLeft1.innerHTML = "Sold Out!";
        buyButton1.style.display = "none";
        alert(`คุณได้ซื้อสินค้า ${productName1.textContent} อย่างสำเร็จ!\nสินค้านี้หมดแล้ว!`);
    }

});

buyButton2.addEventListener('click', function () {

    amountLeft2.innerHTML = productAmount2;
    productAmount2--;

    if (productAmount2 > 0) {
        amountLeft2.innerHTML = productAmount2;
        alert(`คุณได้ซื้อสินค้า ${productName2.textContent} อย่างสำเร็จ!\nสินค้าเหลืออยู่ ${productAmount2} ตัว`);
    } else {
        amountLeft2.innerHTML = "Sold Out!";
        buyButton2.style.display = "none";
        alert(`คุณได้ซื้อสินค้า ${productName2.textContent} อย่างสำเร็จ!\nสินค้านี้หมดแล้ว!`);
    }

});

buyButton3.addEventListener('click', function () {

    amountLeft3.innerHTML = productAmount3;
    productAmount3--;

    if (productAmount3 > 0) {
        amountLeft3.innerHTML = productAmount3;
        alert(`คุณได้ซื้อสินค้า ${productName3.textContent} อย่างสำเร็จ!\nสินค้าเหลืออยู่ ${productAmount3} ตัว`);
    } else {
        amountLeft3.innerHTML = "Sold Out!";
        buyButton3.style.display = "none";
        alert(`คุณได้ซื้อสินค้า ${productName3.textContent} อย่างสำเร็จ!\nสินค้านี้หมดแล้ว!`);
    }

});