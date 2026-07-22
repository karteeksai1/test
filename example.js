function calculateTotal(price, tax, discount){

let FinalAmount=(price+tax)-discount

if(FinalAmount<0){
FinalAmount=0
}

console.log("The final amount is "+FinalAmount)

return FinalAmount

}

const items=[10,20,30,40]

for(let i=0;i<items.length;i++){

calculateTotal(items[i],2,1)

}
