const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (accumulator,cuurentValue) {
//     console.log(`accumulator; ${accumulator} and current value : ${cuurentValue}`);
//     return accumulator + cuurentValue
// },0)

// const myTotal = myNums.reduce( (accumulator,cuurentValue) => accumulator + cuurentValue,0 )

// console.log(`my total :${myTotal}`);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python",
        price: 1999
    },
    {
        itemName : "java",
        price: 999
    },
    {
        itemName : "DSA",
        price: 3999
    }
    
]

const pricetoPay = shoppingCart.reduce( (acc,item) => acc + item.price,0 )

console.log(pricetoPay);
