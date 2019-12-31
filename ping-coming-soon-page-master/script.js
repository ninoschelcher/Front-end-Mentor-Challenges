const submitButton = document.getElementById("button");
const emailInput = document.getElementById("email");
const errorParagraph = document.getElementById("error");

function checkForm() {
    event.preventDefault();

    if (emailInput.value.includes("@")) {
        errorParagraph.textContent = ("Thanks for signing up!");
        errorParagraph.style.color = "green";
    } else if (emailInput.value.includes("@") == false && emailInput.value == "") {
        errorParagraph.textContent = ("Oops! try again!");
        errorParagraph.style.color = "red";
    } 
}

submitButton.addEventListener("click", checkForm);


