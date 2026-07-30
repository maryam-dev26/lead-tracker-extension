let myLeads = `["www.awesomelead.com"]`


// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.example.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")




// localStorage.setItem(key, value)
// localStorage.setItem("myName", "Maryam")

//localStorage.getItem(key)
//let name = localStorage.getItem("myName")
//console.log(name)

// localStorage.clear()

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
});

function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    //normal string
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"  
    
    //template string
    listItems +=
     `<li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>`
}
ulEl.innerHTML = listItems
}
