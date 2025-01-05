const inputs = document.querySelectorAll(".input");
const button = document.getElementById("submit-button");
const cartIcon = document.getElementById("cart-icon");
const loginForm = document.getElementById("login-form");
const signup = document.getElementById("signup-form");
const switchLogin = document.getElementById("switch-to-login");
const switchSignup = document.getElementById("switch-to-signup");
const closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        loginForm.classList.remove("active");
        signup.classList.remove("active");
    })
})
cartIcon.addEventListener("click", () => {
    loginForm.classList.add("active");
});
switchLogin.addEventListener("click", () => {
    loginForm.classList.add("active");
    signup.classList.remove("active");
});
switchSignup.addEventListener("click", () => {
    signup.classList.add("active");
    loginForm.classList.remove("active");
});

function checkInputs(){
    inputs.forEach(input => {
        if(input.value == ""){
            input.classList.add("empty");
        } else {
            input.classList.remove("empty");
        }
    })
}