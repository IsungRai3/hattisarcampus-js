const isRaining = true

//if(isRaining){
//    console.log("carry umbrella")
//}else{
//    console.log("Don't carry umbrella")
//}

//ternary operator
//const result = isRaining ? "carry umbrella" : "Don't carry umbrella"
//console.log(result)

//short-circuit
isRaining && console.log("carry umbrella")

//const age =  21
//if (age>18){
//    console.log("you can vote")
//}else{
//    console.log("you cannot cast vote")
//}

//const age = "21"
//if (age === 21){
//    console.log("Age equals 21")
//}else{
//    console.log("Age doesn't equals 21")
//}

const temperature = 27
if (temperature>30){
    console.log("Hot")
}else if(temperature>20){
    console.log("Moderate")
}else{
    console.log("Cool")
}

const grade = 70
if(grade<90 && grade>=80){
    console.log("A")
}else if(grade<80 && grade>=70){
    console.log("B+")
}else if(grade<70 && grade>=60){
    console.log("B")
}else{
    console.log("Fail")
}

const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

//for(var i = 0; i < days.length;i++){
  //  console.log(days[i])
//}

//for (let abc of days){
//    console.log(abc)
//}

const data = {
    name : "Isung",
    age : 20,
    address : "Dharan"
}

for (let key in data){
    console.log(key+" is "+data[key])
}

//regular function
// function add(a,b){
//     console.log(a + b)
// }
// add(1,2)

// const add = (a,b)=>{
//     console.log(a + b)
// }

const numbers = [1,2,3,4,5]


function num(numbers){
    for(let n of numbers){
        console.log(n**2)
    }
}
num(numbers)



const isu=

{
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}
function rai(isu){
    console.log(isu.code[0].userId)
    console.log(isu.code[0].title)
    console.log(isu.code[0].ipAddress)
}
rai(isu)
