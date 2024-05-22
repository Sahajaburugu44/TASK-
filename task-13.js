


function fibonacci(add){
    let a=0;
    let b=1;
    let sum;
    for(let i=1;i<=add;i++){
        console.log(a);
        sum=a+b;
        a=b;
        b=sum;

    }
}
console.log(fibonacci(8));