let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick", function () {
    console.log("double click")
    localStorage.clear()
    myLeads = []
    render(myLeads)

})

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

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log( localStorage.getItem("myLeads") )
})




