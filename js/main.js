const signinbtn=document.querySelector("#signin");
const signupbtn=document.querySelector("#signup");
const container=document.querySelector(".container");

signupbtn.addEventListener("click",()=>{
    container.classList.add("signup_mode")

});
signinbtn.addEventListener("click",()=>{
    container.classList.remove("signup_mode")

});
