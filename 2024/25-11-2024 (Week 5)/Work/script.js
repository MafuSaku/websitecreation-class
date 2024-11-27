function handleSubmit(event){
    event.preventDefault(); // Will prevent the form from refreshing
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;
    var tel = document.getElementById("telephoneInput").value;
    var date = document.getElementById("dateInput").value;
    var address = document.getElementById("addressInput").value;
    var gender = document.getElementById("genderSelect").value;
    //var coding = document.getElementById("Coding").value;
    //var uiux = document.getElementById("UIUXDesign").value;
    //var history = document.getElementById("History").value;
    var favoriteSubject = document.querySelector('input[name="favoriteSubject"]:checked');
    var favoriteSubjectValue
    // var favoriteSubjectValue = favoriteSubject ? favoriteSubject.value : "ไม่เลือกวิชา";

     if (favoriteSubject) {
        favoriteSubjectValue = favoriteSubject.value;
     } else {
        favoriteSubjectValue = "ไม่ได้เลือกวิชา!";
    }

    alert("ชื่อของคุณคือ: " + name +
        "\nอายุของคุณคือ " + age +
        "\nเบอร์โทรของคุณคือ: " + tel +
        "\nวันเกิดของคุณคือวันที่: " + date +
        "\nที่อยู่ของคุณคือ: " + address +
        "\nเพศของคุณคือ: " + gender +
        "\nวิชาโปรดของคุณคือ: " + favoriteSubjectValue + 
        "\nนี่คือสิ่งที่คุณส่งมาให้พวกเรา!");
};