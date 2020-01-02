let button = document.getElementById("submit");
let input = document.getElementById("email");
let error = document.getElementById("error");

function checkInput() {
    event.preventDefault();

    if (input.value.includes("@") === false && input.value === "") {
        error = document.getElementById("error").innerHTML = "This email is not correct";
        error.style.color = "red";
    } else if(input.value.includes("@")){
        error = document.getElementById("error").innerHTML = "This is a correct email";
        error.style.color = "green";
    } 
}

button.addEventListener("click", checkInput);