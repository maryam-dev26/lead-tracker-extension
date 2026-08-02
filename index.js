let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
let listItems = ""
for (let i = 0; i < leads.length; i++) {
    listItems +=
     `<li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>`
}
ulEl.innerHTML = listItems
}



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log( localStorage.getItem("myLeads") )
})


//const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
//]

//array of objects
tabBtn.addEventListener("click", function() {
    //chrome dot tabs, that's a so called API application programming interface.
chrome.tabs.query({active: true, currentWindow: true}, function(){
    //console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    })   
})

deleteBtn.addEventListener("dblclick", function () {
    console.log("double click")
    localStorage.clear()
    myLeads = []
    render(myLeads)

})



/*
parameter vs argument
/.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")

/number as function parameter
function add(num1, num2) {
    return num1 + num2
}
add(3, 4)


/array as parameter

function getFirst(arr){
return arr[0]
}
let firstCard = getFirst(10,12,21)
console.log(firstCard)
*/