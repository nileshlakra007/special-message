document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const codeInput = document.getElementById("codeInput");
    const hiddenMessage = document.getElementById("hiddenMessage");
    const error = document.getElementById("error");

    // Set the correct code (the answer to the math problem)
    const correctCode = "6174"; // Example code, replace with the result of your math problem

    submitButton.addEventListener("click", function () {
        if (codeInput.value === correctCode) {
            document.getElementById("codeEntry").style.display = "none";
            hiddenMessage.style.display = "block";
        } else {
            error.style.display = "block";
        }
    });
});
