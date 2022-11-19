const posts = [
    { title: 'post one', body: 'this is post one', createAt: new Date().getTime() },
    { title: 'post two', body: 'this is post two', createAt: new Date().getTime() }

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

async function init(){
     await createpost( { title: 'post three', body: 'this is post three', createAt: new Date().getTime() })

    getposts();
    const deletes= await deletepost();
    const dele= await deletepost();
    const del= await deletepost();

}

init();