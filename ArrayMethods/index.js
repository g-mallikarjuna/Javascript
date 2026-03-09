const fruits = ['apple','mango','pineapple','banana','orange','banana','grapes'];

//foreach
fruits.forEach((fruit, index)=>{
    console.log(`${index} : ${fruit} `)
})

//map
const newFruitsBasket = fruits.map((fruit, index)=>{
    if(fruit === 'orange'){
        fruit = 'banana';
    }
    return fruit;
})

console.log(newFruitsBasket);

//filter
const bananaOnly = fruits.filter((fruit)=> fruit === 'grapes');

console.log(bananaOnly);