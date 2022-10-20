class student{
    static count=0;

    constructor(name,age,mobile,marks)
    {
        this.name=name;
        this.age=age;
        this.mobile=mobile;
        this.marks=marks;
        student.countstudent();
    }
    static countstudent(){
        return(student.count++);
    }
    eligible()
    {
        if(this.marks<40)
        {
            console.log(`${this.name} is not eligible`);
        }
        else
        {
            console.log(`${this.name} is eligible`);
        }
    }
    setPlacementAge(minPlacementAge)
    {
       return (minmarks) => {
         if (this.marks > minmarks && this.age > minPlacementAge) {
            console.log(`${this.name} is ready for placement`);
         }
         else
         {
            console.log(`${this.name} is not ready for placement`);
         }
       }

    }
}

const st1= new student('ram',23,6543,40);
const st2= new student('shyam',22,8443,68);
const st3= new student('gopal',23,6543,97);
const st4= new student('venky',23,6543,90);
const st5= new student('bheem',23,6543,39);
console.log(student.countstudent());
st1.eligible();
st2.eligible();
st3.eligible();
st4.eligible();
st5.eligible();
st1.setPlacementAge(18)(60);
st2.setPlacementAge(18)(60);
st3.setPlacementAge(18)(60);
st4.setPlacementAge(18)(60);
st5.setPlacementAge(18)(60);



    