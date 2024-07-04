const fruits = ['mango','apple','orange']
fruits.forEach(function(fruit){
    console.log(fruit)

})

// fruits.map(function(){

// })
// fruits.reduce(function(){

// })
// fruits.filter(function(){

// })

  const nums = [1,2,3,4,5]
  const squares = []
  nums.forEach(function(num){
     squares.push(num*num)

  })
  console.log(squares)

const data = [
    {
        firstName : "isung",
        lastName : "rai",
        address : "dharan"
    },
    {
        firstName : "bemishal",
        lastName : "rai",
        address : "dharan"
    },
    {
        firstName : "prajwal",
        lastName : "rai",
        address : "chatara" 
    },
]


// const result = data.map((object)=>{
//     return{
//         hello : object.firstName + " " + object.lastName
//     }

// })
// console.log(result)


const results = data.map((object)=>{
    return{
        ...object,
        fullname : object.firstName + " " + object.lastName
    }

})
console.log(results)


const numberData = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = numberData.filter((number)=>{
    return number%2 !== 0

})
console.log(oddNumbers)


const nnum = numberData.filter((num)=>{
    return num > 5

})
console.log(nnum)

const books = [
    {
        title : "You can win",
        author : 'shiv khera',
        publishedAt : 2001
    },
    {
        title : "Think like a monk",
        author : 'Jay shetty',
        publishedAt : 2022
    },
    {
        title : "Cashflow quadrant",
        author : 'Robert T. Kiyosaki',
        publishedAt : 1909
    },
    {
        title : "You can win2",
        author : 'shiv khera',
        publishedAt : 1990
    },
    {
        title : "Think like a monk2",
        author : 'Jay shetty',
        publishedAt : 1999
    },
    {
        title : "Cashflow quadrant2",
        author : 'Robert T. Kiyosaki',
        publishedAt : 2010
    }
]

const newtwo = books.filter((boo)=>{
    return boo.publishedAt > 2000
})
console.log(newtwo)

const files = ["index.html","app.js","app.java","style.css","test.js"]
const jsselect = files.filter((file)=>{
    return file.endsWith(".js")
})
console.log(jsselect)


const lastTask = [1,2,null,undefined,"isung","haha","hehe"]
const Task = lastTask.filter((work)=>{
    return work !== null && work !== undefined
})
console.log(Task)

const lastData = [
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]
const zz = lastData.filter((data)=>{
    return data.marks > 500 && data.name.endsWith("sh") && data.status ==="pass"
})
console.log(zz)




// data.forEach((bye)=>{
//     console.log(bye.firstName + " " + bye.lastName)
// })

// const nums2 = [2,4,6,8]
// const squared = nums2.map((num)=>{
//     return num * num
// })
// console.log(nums2)
// console.log(squared)


// const numbers = [1,2,3,4,5]

// const haha = numbers.map((numss)=>{
//     return{
//         text : 'A',
//         number : numss 

//     }
// })
// console.log(haha)

