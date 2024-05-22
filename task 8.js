   


   let array1=[1,2,3,4,5];
   let array2=[2,4,6,9,3];
   let commonElements=[];
   for(i=0;i<array1.length;i++){
    for(j=0;j<array2.length;j++){
        if(array1[i] === array2[j]){
            commonElements.push(array1[i]);
            break;
        }    
    }
   }
console.log("Common elements:",commonElements);