var form=document.getElementById('addForm');
var itemList =document.getElementById('items');

//form submit

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

     //get input value
     var newItems=document.getElementById('item').value;

     //create a new li 
     var li=document.createElement('li');
     li.className='list-group-item';
     //to add text 
     li.appendChild(document.createTextNode(newItems));

     //add del button
     var deleteBtn=document.createElement('button');
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('x'));
     li.appendChild(deleteBtn);
     itemList.appendChild(li);
}
