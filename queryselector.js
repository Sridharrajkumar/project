
//queryselector
var seconditems= document.querySelector(".list-group-item:nth-child(2)");
seconditems.style.backgroundColor="green";

var thirditem=document.querySelector(".list-group-item:nth-child(3)");
thirditem.style.color='white';

//queryselectorall

var item=document.querySelectorAll(".list-group-item");
item[1].style.color='red';

var odd=document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='orange';
}