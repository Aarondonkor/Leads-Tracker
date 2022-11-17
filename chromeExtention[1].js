var myLeads = [];
const inputEl = document.getElementById("textfield");
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteEl = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const storedLeads = JSON.parse(localStorage.getItem("myLeads"))
if(storedLeads){
    myLeads = storedLeads
    render()
}


tabBtn.addEventListener("click", function(){
    console.log("aaron")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    for(var m=0; m<myLeads.length; m++){
        if(tabs[0].url == myLeads[m]){
            tabs[0].url = ""
        }
    }
    if(tabs[0].url){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render()
}
})
})
inputBtn.addEventListener("click", function(){
    if(inputEl.value){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render();}
})

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render()
})

function render(){
    var listItems = "";
    for(var i = 0; i < myLeads.length; i++)
    {
        listItems += `<li>
                        <a target = '_blanck' href =${myLeads[i]}>
                        ${myLeads[i]}</a>
                    </li>`;
        //alternative using createElement and append
        //var li = document.createElement("li")
        //li.textContent = myLeads[i];
        //ulEl.append(li)

    };
    
    ulEl.innerHTML = listItems;

};