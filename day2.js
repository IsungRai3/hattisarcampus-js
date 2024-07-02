const days = ['sunday','monday','tuesday','wednesday']
//console.log(days[2])

//days.push('thursday')
//days.pop()
//days.unshift('hello')
//days.shift()
//const data = days.slice(1,3)
//console.log(data)
days.splice(3,1,'bye')
//console.log(days)

//const data = [1,2,3,4,5,6]
//data.splice(1,3,'hello','bye','world')
//console.log(data)

//const vowels = ['i','s','u','n','g']
//vowels.splice(0,5,13,1,14,9,19)
//console.log(vowels)

const text = 'I am from nepal'
const splitedData = text.split(" ")
console.log(splitedData)

const language = ['js','php','c']
language.splice(1,0,'html')
console.log(language)


//var name = "isung"
//function greet(name){
//   console.log("hello" + name)
//}

const datas = {
    name : ['isung','aryan']
}
datas.name.push('bemi')
console.log(datas)

const test2 = {
    name : ['isung','prajwal','aryan']
}
test2.name.splice(0,3,1,2,3)
console.log(test2)


const person = Object.freeze({
    name : "isung",
    address : "dharan",
    nationality : "Nepali"
})

console.log(person.address)
console.log(person['person'])
//person.age = 20
//person.haha = "hehe"
//console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))

const test =[
    {
        name : "isung"
    },
    {
        name : "aryan"
    }
]

test.push({
    name : "prajwal"
})
console.log(test)
