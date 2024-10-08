const developer = {
  name: "Martins",
  age: 25,
  technology: [
    {
      name: "JavaScript", 
      specialty: "Web/Mobile"
    },
    {
      name: "C++", 
      specialty: "Desktop"
    },
    {
      name: "Python", 
      specialty: "Data Science"
    }
  ]
}

console.log(`The user ${developer.name} is ${developer.age} years old and uses ${developer.technology[0].name} technology with a specialty in ${developer.technology[0].specialty}.`)