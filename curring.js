//curring by using bind method 
    let multiply = function(x,y){
        console.log(x*y);
    }

    let multiplybytwo=multiply.bind(this,2);
    multiplybytwo(5);

    // curring by using clouser

    let clouser=function (x){
        return function(y) {
          console.log(x+y);
        }
    }
    let addtwo=clouser(3);
    addtwo(3);