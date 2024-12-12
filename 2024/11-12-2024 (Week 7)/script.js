function start_1() {
    let number1 = prompt("กรุณาใส่คะแนนวิชาวงจรไฟฟ้าและการวัด : ");
    let number2 = prompt("กรุณาใส่คะแนนวิชาเทคโนโลยีคอมพิวเตอร์ : ");
    let number3 = prompt("กรุณาใส่คะแนนวิชาวงจรพัลส์และดิจิทัล : ");
    let number4 = prompt("กรุณาใส่คะแนนวิชาเทคนิคการสอนและการจัดการเรียนรู้ : ");

    document.getElementById("show_score_cir").innerHTML = "คะแนนของคุณ : " + number1;
    document.getElementById("show_score_tec").innerHTML = "คะแนนของคุณ : " + number2;
    document.getElementById("show_score_pp").innerHTML = "คะแนนของคุณ : " + number3;
    document.getElementById("show_score_edu").innerHTML = "คะแนนของคุณ : " + number4;

    if (number1 >= 80) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : A 'ผ่าน' ";
    } else if (number1 >= 75 && number1 <= 79) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : B+ 'ผ่าน' ";
    } else if (number1 >= 70 && number1 <= 74) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : B 'ผ่าน' ";
    } else if (number1 >= 65 && number1 <= 69) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : C+ 'ผ่าน' ";
    } else if (number1 >= 60 && number1 <= 64) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : C 'ผ่าน' ";
    } else if (number1 >= 55 && number1 <= 59) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : D+ 'ผ่าน' ";
    } else if (number1 >= 50 && number1 <= 54) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : D 'ผ่าน' ";
    } else if (number1 < 50) {
        document.getElementById("show_score_cir1").innerHTML = "เกรดของคุณ : F 'ผ่าน' ";
    } else if (number1 == "") {
        document.getElementById("show_score_cir1").innerHTML = "กรุณาใส่ข้อมูล";
    } else if (isNaN(number1)) {
        document.getElementById("show_score_cir1").innerHTML = "ข้อมูลไม่ถูกต้อง";
    }

    if (number2 >= 80) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : A 'ผ่าน' ";
    } else if (number2 >= 75 && number2 <= 79) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : B+ 'ผ่าน' ";
    } else if (number2 >= 70 && number2 <= 74) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : B 'ผ่าน' ";
    } else if (number2 >= 65 && number2 <= 69) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : C+ 'ผ่าน' ";
    } else if (number2 >= 60 && number2 <= 64) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : C 'ผ่าน' ";
    } else if (number2 >= 55 && number2 <= 59) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : D+ 'ผ่าน' ";
    } else if (number2 >= 50 && number2 <= 54) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : D 'ผ่าน' ";
    } else if (number2 < 50) {
        document.getElementById("show_score_tec1").innerHTML = "เกรดของคุณ : F 'ผ่าน' ";
    } else if (number2 == "") {
        document.getElementById("show_score_tec1").innerHTML = "กรุณาใส่ข้อมูล";
    } else if (isNaN(number2)) {
        document.getElementById("show_score_tec1").innerHTML = "ข้อมูลไม่ถูกต้อง";
    }

    if (number3 >= 80) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : A 'ผ่าน' ";
    } else if (number3 >= 75 && number3 <= 79) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : B+ 'ผ่าน' ";
    } else if (number3 >= 70 && number3 <= 74) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : B 'ผ่าน' ";
    } else if (number3 >= 65 && number3 <= 69) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : C+ 'ผ่าน' ";
    } else if (number3 >= 60 && number3 <= 64) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : C 'ผ่าน' ";
    } else if (number3 >= 55 && number3 <= 59) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : D+ 'ผ่าน' ";
    } else if (number3 >= 50 && number3 <= 54) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : D 'ผ่าน' ";
    } else if (number3 < 50) {
        document.getElementById("show_score_pp1").innerHTML = "เกรดของคุณ : F 'ผ่าน' ";
    } else if (number3 == "") {
        document.getElementById("show_score_pp1").innerHTML = "กรุณาใส่ข้อมูล";
    } else if (isNaN(number3)) {
        document.getElementById("show_score_pp1").innerHTML = "ข้อมูลไม่ถูกต้อง";
    }

    if (number4 >= 80) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : A 'ผ่าน' ";
    } else if (number4 >= 75 && number4 <= 79) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : B+ 'ผ่าน' ";
    } else if (number4 >= 70 && number4 <= 74) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : B 'ผ่าน' ";
    } else if (number4 >= 65 && number4 <= 69) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : C+ 'ผ่าน' ";
    } else if (number4 >= 60 && number4 <= 64) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : C 'ผ่าน' ";
    } else if (number4 >= 55 && number4 <= 59) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : D+ 'ผ่าน' ";
    } else if (number4 >= 50 && number4 <= 54) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : D 'ผ่าน' ";
    } else if (number4 < 50) {
        document.getElementById("show_score_edu1").innerHTML = "เกรดของคุณ : F 'ผ่าน' ";
    } else if (number4 == "") {
        document.getElementById("show_score_edu1").innerHTML = "กรุณาใส่ข้อมูล";
    } else if (isNaN(number4)) {
        document.getElementById("show_score_edu1").innerHTML = "ข้อมูลไม่ถูกต้อง";
    }

    let a = number1
    let b = number2
    let c = number3
    let d = number4

    document.getElementById("showxbar").innerHTML = "คะแนนเฉลี่ย : " + (a / 4 + b / 4 + c / 4 + d / 4);
    document.getElementById("showxbar").style.display = "block";
    document.getElementById("bst1").style.display = "block";
    document.getElementById("bst").style.display = "none";
}