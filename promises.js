const posts = [
    {title: 'post one' ,body :'this is post one',createAt: new Date().getTime()},
    {title: 'post two' ,body :'this is post two',createAt: new Date().getTime()}
    
];
function getposts(){
    setInterval(() => {
        let output='';
        posts.forEach((post) => {
            output +=`<li>${post.title}  created ${(new Date().getTime() - post.createAt) / 1000} seconds ago</li>`;
        }) ;
        document.body.innerHTML=output;
    },1000);
}

 function createpost(post){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            posts.push({...post,createAt: new Date().getTime()});
            const error = true;
            if(error){
                resolve(posts);
            }
            else{
                reject('Error: something went wrong');
            }
        },1000);

    });
    
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(posts.values !== 0){
                resolve(posts.pop());
            }
            else{
                reject('error : array is empty');
            }
            
        },1000);

    })
}

createpost({title: 'post three' ,body :'this is post three',createAt: new Date().getTime()})
.then(() =>{
    getposts()
    deletepost().then(()=>{
        getposts();
       
        deletepost().then(()=>{
            getposts();

            deletepost().then(()=>{
                getposts();

                deletepost().then(()=>{
                    getposts();
                })
            })
        })
    
})
    


    
    .catch(err => console.log(err));

})

//const promise1= Promise.resolve('hi');
//const promise2=10;
//const promise3=new Promise((resolve, reject)=>{
  //  setTimeout(resolve,2000,'gb');
//});
//Promise.all([promise1,promise2,promise3]).then(values => console.log(values));

const user={
    name:'sri',
    lastactivitytime: '06 of july'
}

function updatelastactivitytime (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            console.log(user.lastactivitytime);
            resolve(user.lastactivitytime)
        })
        
    })
}

function userupdatepost(){
    Promise.all([createpost({title: 'post four' ,body :'this is post four',createAt: new Date().getTime()}),updatelastactivitytime()]).then(([createresolve,updateresolve])=>{
        console.log(createresolve,updateresolve);

    })
}
userupdatepost();


