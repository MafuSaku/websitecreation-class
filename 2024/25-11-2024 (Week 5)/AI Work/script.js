// This function handles form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevents the page from refreshing when the form is submitted

    // Gather data from the form fields
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;
    var tel = document.getElementById("telephoneInput").value;
    var date = document.getElementById("dateInput").value;
    var address = document.getElementById("addressInput").value;
    var gender = document.getElementById("genderSelect").value;

    // Handle the favorite subject (radio buttons)
    var favoriteSubject = document.querySelector('input[name="favoriteSubject"]:checked');
    var favoriteSubjectValue = favoriteSubject ? favoriteSubject.value : "ไม่ได้เลือกวิชา!";

    // Display collected data in an alert box
    alert(
        "ชื่อของคุณคือ: " + name + 
        "\nอายุของคุณคือ: " + age +
        "\nเบอร์โทรของคุณคือ: " + tel + 
        "\nวันเกิดของคุณคือ: " + date + 
        "\nที่อยู่ของคุณคือ: " + address + 
        "\nเพศของคุณคือ: " + gender + 
        "\nวิชาโปรดของคุณคือ: " + favoriteSubjectValue +
        "\nข้อมูลนี้ถูกส่งมาให้เรา!"
    );
}