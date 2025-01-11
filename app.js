let arrOfTodo = []


function submit(){
    const inp = document.querySelector("input")
    let list = document.querySelector("#list")

    if (!inp.value) {
        alert("Please add your task");
        return;
    }
    list.innerHTML = ''
    arrOfTodo.push(inp.value)
    
    arrOfTodo.forEach(function (todoList,index){
        
        let myDiv = document.createElement("div")
        myDiv.setAttribute("id",index)
        myDiv.innerHTML = `<p> ${todoList} </p>
        <button onclick="editHandler(this)">Edit</button>
        <button onclick="deleteHandler(this)">Delete</button>`
        
        list.appendChild(myDiv)
    })
    inp.value = ``
    }
function deleteHandler(specificItem){
    console.log("checked...");
   console.log(specificItem.parentElement.id);
   let listElem = document.querySelector("#list")
   listElem.innerHTML = ``
   arrOfTodo.splice(specificItem.parentElement.id,1)

   arrOfTodo.forEach(function (todoList,index){
    console.log(todoList);

    let myDiv = document.createElement("div")
    myDiv.setAttribute("id",index)
    myDiv.innerHTML = `<p> ${todoList}</p>
    <button>Edit</button>
    <button onclick="deleteHandler(this)"><span class="material-symbols-outlined">
delete
</span></button>`

    listElem.appendChild(myDiv)
    
   })
}

function editHandler(specificItem){
    let inp = document.querySelector("input")
    inp.value = specificItem.parentElement.children[0].innerText
    let edit = document.querySelector("#add")
    add.innerText = "Edit"
    edit.setAttribute("onclick","edit()")
}

function edit(){
    console.log("checked...");
    let inp = document.querySelector("input")
    let list = document.querySelector("#list")
    let add = document.querySelector("#add")
    list.innerHTML = inp.value
    inp.value = " "
    add.innerText = "Add"
    arrOfTodo.forEach(function (todoList,index){
        console.log(todoList);
        
        let myDiv = document.createElement("div")
        myDiv.setAttribute("id",index)
        myDiv.innerHTML = `<p> ${inp.value} </p>
        <button onclick="editHandler(this)">Edit</button>
        <button onclick="deleteHandler(this)">Delete</button>`
        
        list.appendChild(myDiv)
    })
    inp.value = ``
    }
