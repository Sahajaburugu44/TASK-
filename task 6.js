


let number=5;
let factorial=1;
if (number<0){
    console.log("factorial is not defined for negative numbers");

}else{
    for (let i=1;i<=number;i++)
    {
        factorial*=i;

    }
    console.log("the factorial of "+number+"is:"+factorial);
    
}