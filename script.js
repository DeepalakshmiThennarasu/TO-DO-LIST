function addTOdo()
{
    //get input value
var todoInput=document.getElementById("todo-input");
//white space remove
var todoText=todoInput.value.trim();
//create list item
if(todoText!=="")
    {
        var li=document.createElement("li");
        //set text content to input value
        li.textContent=todoText;
        //create a delete button 
        var deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick=function()
        {
            li.remove();
        };
        li.appendChild(deleteButton);
        document.getElementById("todo-list").appendChild(li);
        todoInput.value-"";
        
    }
}