// JavaScript code will be added here
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".food button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });

});
