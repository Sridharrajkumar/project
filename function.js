var items=document.querySelector('#items');

//parentnode

console.log(items.parentNode);
items.parentNode.style.backgroundColor='#f4f4f4';


//parentelement

console.log(items.parentElement);

//childnodes

console.log(items.childNodes);

//children

console.log(items.children);
console.log(items.children[2]);

//firstchild

console.log(items.firstChild);
//items.firstChild.textContent='hello';

//firstelementchild

console.log(items.firstElementChild);
//items.firstElementChild.textContent='hi';

//lastchild
console.log(items.lastChild);
//items.lastChild.textContent='bye';

//lastelementchild
console.log(items.lastElementChild);
//items.lastElementChild.textContent='bye';

//nextsibiling 
console.log(items.nextSibling);

//nextelementsibiling 

console.log(items.nextElementSibling);

//previouseibiling 
console.log(items.previousSibling);

//previouselementsibiling
console.log(items.previousElementSibling);

//createelement
var newdiv=document.createElement('div');
console.log(newdiv)

//addclassname
newdiv.className='boom';
//addid
newdiv.id='boom';
//add attribute
newdiv.setAttribute('title','hello boom');

//create text node
 var text=document.createTextNode('hello');
// add text text to the created element
 newdiv.append(text);
//now moving the createdelement to the dom
 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1')
 container.insertBefore(newdiv,h1);

 //creating the new li
 var ul=document.getElementById('items');
 var li=document.createElement('li');
 li.appendChild(document.createTextNode('hello world'));
 ul.prepend(li);



