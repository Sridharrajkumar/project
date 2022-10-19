// 1.call function 

let obj={name:'mathews'}

let calls=function(a){
     return  this.name+" "+a;

}

let fullname=calls.call(obj, 'ranathunga');
console.log(fullname);

// 2.apply function 
let obj2= {std1:'name: ranathuga'}
let ca=function(age,ph){
    return this.std1+" "+age+" "+ph;

}

let arr=['age: 23' , 'ph:098765435'];

console.log(ca.apply(obj2,arr));

//3&4 student age using bind function

var student={age:20}
let age= function(){
    return " The age of stundent ranatunga is: " +this.age;
}

let bound=age.bind(student);
console.log(bound());

  


 