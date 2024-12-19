const inputs = document.querySelectorAll(".input");
const button = document.getElementById("submit-button");

button.addEventListener("click", () => {
    // console.log(');
    inputs.forEach(input => {
        if(input.value == ""){
            input.classList.add("empty");
        } else {
            input.classList.remove("empty");
        }
        console.log(input);
    })
})