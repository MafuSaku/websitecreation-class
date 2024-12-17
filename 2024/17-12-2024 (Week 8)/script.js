function productPurchased() {
    const purchasePrompt = "คุณได้ซื้อสินค้า: "
    var purchasedContent = document.getElementById("productName").innerHTML
    var purchaseAmount = document.getElementById("price").innerHTML

    alert(
        purchasePrompt +
        purchasedContent +
        "\nราคา: " +
        purchaseAmount +
        "\nสถาณะ: สำเร็จแล้ว!"
    )
}