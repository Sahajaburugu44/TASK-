



const users=[
    {id:1,name:"A",age:25},
    {id:2,name:"B",age:30},
    {id:3,name:"C",age:22}
];
for (let userIdtoUpdate of users){
    if(userIdtoUpdate.id ===3){
        userIdtoUpdate.age=35;
    
    }else{
        userIdtoUpdate.id='the user does ot exist';
    }
}
console.log("update data:");
console.log(users);