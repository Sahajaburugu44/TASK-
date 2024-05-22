


let numbertocheck=4;
let isprime=true;
if(numbertocheck<=1){
    isprime=false;
}
else{
    for (let i=2;i<numbertocheck;i++)
    if(numbertocheck%i==0)
    isprime=false;

}
if (isprime){
console.log(numbertocheck+'is prime')
}
else {
    console.log(numbertocheck+'is not prime')
}