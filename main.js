const body = document.querySelector("body");
const header = document.querySelector(".header");
const accounts = document.querySelector(".accounts");
const overview = document.querySelector(".overview");
const footer = document.querySelector(".footer");
const toggleBtn = document.querySelector(".toggle-container .btn");
const toggledContent = [body, header, accounts, overview, footer];

toggleBtn.addEventListener("click", ()=>{
    if(toggleBtn.classList.contains("active")){
        toggleBtn.classList.remove("active");
        toggledContent.forEach(content => content.dataset.theme = "null");
    }else{
        toggleBtn.classList.add("active");
        toggledContent.forEach(content => content.dataset.theme = "dark");
    }
})

