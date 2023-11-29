let food1= require('./food.json'); 

let food2=food1.map((element)=>{ 
    return element
})
// console.log(food2);

let food3=food1.filter((element)=>{
    return element.category==='Vegetable';
})
// console.log(food3);
let food4=food1.filter((element)=>{
    return element.category==='Fruit';
})
// console.log(food4);
let food5=food1.filter((element)=>{
    return element.category==='Protein';
})
// console.log(food5);
let food6=food1.filter((element)=>{
    return element.category==='Nuts';
})
// console.log(food6);
let food7=food1.filter((element)=>{
    return element.category==='Grain';
})
// console.log(food7);
let food8=food1.filter((element)=>{
    return element.category==='Dairy';
})
// console.log(food8);
let food9=food1.filter((element)=>{
    return element.calorie>100;
})
// console.log(food9);
let food10=food1.filter((element)=>{
    return element.calorie<100;
})
// console.log(food10);
let food11=food1.sort(function(a,b){
    return b.protiens-a.protiens;

})
// console.log(food11); 

let food12=food1.sort(function(x,y){
    return x.cab-y.cab;
})
console.log(food12);  