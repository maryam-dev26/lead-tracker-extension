let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
 // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems +=
     `<li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>`
}
ulEl.innerHTML = listItems
}



// 6 falsy values in javascript
// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false