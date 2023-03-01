const btn = document.querySelectorAll(".container > button")
const imageList = document.querySelectorAll(".images > img")
console.log(btn)
function handleClick(e) {
    const color = e.target.dataset.color
    imageList.forEach(img =>{
        const theme = img.dataset.theme;
        (!theme.includes(color)) 
        ? img.className = "hide" 
        : img.className = ""
    })
    }
    const active = document.querySelector("button.active")
    active?.classList.remove("active")
   

btn.forEach(button =>{
    button.addEventListener("click", handleClick)
})
