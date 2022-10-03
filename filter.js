var form=document.getElementById('addForm');
var itemList =document.getElementById('items');
var filter=document.getElementById('filter');

itemList.addEventListener('click',removeItem);

//edit 
itemList.addEventListener('click',edititem);

//form submit
form.addEventListener('submit', addItem);

//filter 
filter.addEventListener('keyup',filterItem);


function addItem(e){
    e.preventDefault();

     //get input value
     var newItems=document.getElementById('item').value;
     var description=document.getElementById('description').value;

     //create a new li 
     var li=document.createElement('li');
     li.className='list-group-item';
     //to add text 
     li.appendChild(document.createTextNode(newItems));
     li.appendChild(document.createTextNode(" "+description));

     //add del button
     var deleteBtn=document.createElement('button');
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('x'));
     li.appendChild(deleteBtn);
     itemList.appendChild(li);

     //add edit button
     var editbtn=document.createElement('edit');
     editbtn.className='btn btn-sm float-right edit';
     editbtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editbtn);
     itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm('are u sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}
function edititem(e){
    if(e.target.classList.contains('edit'))
    {
        if(confirm('are u want to edit?'))
        {
            var li=e.target.parentElement;
            itemList.contentEditable='true';
            
        }
    }


}
 

function filterItem(e){
    //changing text to lowercase
    var text=e.target.value.toLowerCase();
   //getting the list
   var items=itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemName2=item.childNodes[1].textContent;
        
        if( itemName.toLowerCase().indexOf(text) !=-1 || itemName2.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';

        }
        else{
            item.style.display='none';
        }
    })

}