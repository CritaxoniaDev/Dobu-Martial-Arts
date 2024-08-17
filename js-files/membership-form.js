function validateForm() {
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (username == '' || password == '') {
        alert("Please fill out all the fields.");
    }
    else {
        alert("You Have been Availed our program, Thank you!");
    }
}