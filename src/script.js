var add = document.getElementById("add")
var todolist = document.getElementById("todolist"); 
var text = document.getElementById("text"); 

console.log(todolist);

add.addEventListener("click",function(event){
   var line = `<button class="done" onclick="done()">Done</button>`
   var editbtn =`<button class="edit" onclick="edit()">Edit</button>`
   var delbtn = `<i onclick="del()" class="fa-solid fa-trash"></i>` 
    if(text.value === ""){
        alert("please enter a task")
    }

    else{
        var li = document.createElement("li");
        li.innerHTML = `${text.value}${delbtn}${editbtn}${line}`
         todolist.appendChild(li)
        text.value = ""
    }


    
})


function del(){
    // alert("bbj")
    event.target.parentElement.remove()
}
function edit(){   
    var newval = prompt("Enter your replaced task")
    if(newval === ""){
        li.innerHTML = `${text.value}${editbtn}${line}${delbtn}`
    }
 else{
        event.target.parentElement.innerHTML = `${newval}
                <i onclick="del()" class="fa-solid fa-trash"></i>
                <button class="edit" onclick="edit()">Edit</button>
        <button class="done" onclick="done()">Done</button
`

 }

}
function done(){
    // alert("nnkjn")
    if(event.target.parentElement.style.textDecoration === "line-through"){
        event.target.parentElement.style.textDecoration = "normal"
    }
    else{
        event.target.parentElement.style.textDecoration = "line-through"
    }
    
}

