function grade() {
    var score = document.getElementById("score1").value;

    if (score < 50)
        document.getElementById("show").innerHTML = "เกรด : F 'ไม่ผ่าน'"
    if (score >= 50 && score < 60)
        document.getElementById("show").innerHTML = "เกรด : D 'ผ่าน'"
    if (score >= 60 && score < 70)
        document.getElementById("show").innerHTML = "เกรด : C 'ผ่าน'"
    if (score >= 70 && score < 80)
        document.getElementById("show").innerHTML = "เกรด : B 'ผ่าน'"
    if (score >= 80)
        document.getElementById("show").innerHTML = "เกรด : A 'ผ่าน'"
    if (isNaN(score))
        document.getElementById("show").innerHTML = "ข้อมูลไม่ถูกต้อง"
    if (score == "")
        document.getElementById("show").innerHTML = "กรุณาใส่คะแนน"
}

function grade2() {
    var score = document.getElementById("score2").value;

    if (score < 50)
        document.getElementById("show2").innerHTML = "เกรด : F 'ไม่ผ่าน'"
    if (score >= 50 && score < 60)
        document.getElementById("show2").innerHTML = "เกรด : D 'ผ่าน'"
    if (score >= 60 && score < 70)
        document.getElementById("show2").innerHTML = "เกรด : C 'ผ่าน'"
    if (score >= 70 && score < 80)
        document.getElementById("show2").innerHTML = "เกรด : B 'ผ่าน'"
    if (score >= 80)
        document.getElementById("show2").innerHTML = "เกรด : A 'ผ่าน'"
    if (isNaN(score))
        document.getElementById("show2").innerHTML = "ข้อมูลไม่ถูกต้อง"
    if (score == "")
        document.getElementById("show2").innerHTML = "กรุณาใส่คะแนน"
}

function grade3() {
    var score = document.getElementById("score3").value;

    if (score < 50)
        document.getElementById("show3").innerHTML = "เกรด : F 'ไม่ผ่าน'"
    if (score >= 50 && score < 60)
        document.getElementById("show3").innerHTML = "เกรด : D 'ผ่าน'"
    if (score >= 60 && score < 70)
        document.getElementById("show3").innerHTML = "เกรด : C 'ผ่าน'"
    if (score >= 70 && score < 80)
        document.getElementById("show3").innerHTML = "เกรด : B 'ผ่าน'"
    if (score >= 80)
        document.getElementById("show3").innerHTML = "เกรด : A 'ผ่าน'"
    if (isNaN(score))
        document.getElementById("show3").innerHTML = "ข้อมูลไม่ถูกต้อง"
    if (score == "")
        document.getElementById("show3").innerHTML = "กรุณาใส่คะแนน"
}

function onSubmit(){
    var firstScore = document.getElementById("show").innerHTML;
    var secondScore = document.getElementById("show2").innerHTML;
    var thirdScore = document.getElementById("show3").innerHTML;

    alert(
        "การกรอกคะแนนของคุณ" +
        "\nผลคะแนนที่ได้ของแต่ละวิชาคือ" +
        "\nวิชาเทคโนโลยีคอมพิวเตอร์: " + firstScore +
        "\nวิชาวงจรไฟฟ้า: " + secondScore +
        "\nวิชาไมโครคอนโทรเลอร์: " + thirdScore
    );

};