const butt= document.querySelector("button")
const Delete= document.querySelector(".delete")
const Display= document.querySelector(".display")

const input= document.querySelector("input")
const ul= document.querySelector("ul")

const popOut= document.querySelector(".pop-out")
const overlay= document.querySelector(".overlay")
const input2= document.querySelector(".input2")

let websites=[]
let names=[]

let Websites= JSON.parse(localStorage.getItem("Websites"))
let Names= JSON.parse(localStorage.getItem("Names"))

if (Websites) {
    websites = Websites
    names = Names
    display()
}

butt.addEventListener("click", ()=>{
    if(input.value == "") return alert("Please enter a website.")
    websites.push(input.value)
    localStorage.setItem("Websites", JSON.stringify(websites))
    active()
})
Delete.addEventListener("click", ()=>{
    localStorage.clear()
    if(names[0] == undefined) return alert("There is nothing to delete.")
    websites=[]
    names=[]
    display()
})
Display.addEventListener("click", ()=>{
    input.value= ""
    if(input2.value == "") return alert("Please enter a name.")
    names.push(input2.value)
    localStorage.setItem("Names", JSON.stringify(names))
    popOut.classList.remove("active")
    overlay.classList.remove("active")
    display()
} )

function active(){
    popOut.classList.add("active")
    overlay.classList.add("active")   
}
function display(){
    input2.value= ""
 
    let borrador=""
    for (let y = 0; y < names.length; y++) {
        borrador+=`<li> <a href= "${websites[y]}" target="_blank"> ${names[y]}</a> </li>`
        console.log(websites[y])
    }
    ul.innerHTML= borrador
}

