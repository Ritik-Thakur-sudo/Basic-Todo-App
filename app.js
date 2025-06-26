let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let deletebtn = document.createElement('button');
    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete");
    
    item.appendChild(deletebtn);  
    ul.appendChild(item);
    inp.value = "";
    
});


ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("item deleted");
        
    }
    
});
