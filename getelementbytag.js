var li=document.getElementsByTagName('li');
console.log(li);
li[4].textcontent='my';
for(var i=0;i<li.length;i++)
{
    if(i%2==0)
    {
        li[i].style.backgroundColor="orange";
    }
    else
    {
        li[i].style.backgroundColor='green';
    }

}