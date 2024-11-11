const loginBtn = document.querySelector(".firstBtn")


const loginHandler = () => {
    window.location.assign("login.html")
}

loginBtn.addEventListener("click" , loginHandler)