const users = [
  { 
    name: "Carlos", 
    technologies: ["HTML", "CSS"] 
  },
  { 
    name: "Jasmine", 
    technologies: ["JavaScript", "CSS"] 
  },
  { 
    name: "Tuane", 
    technologies: ["HTML", "Node.js"]
  }
]

for (let user of users) {
  let technologies = user.technologies.join(", ")

  console.log(`${user.name} works with ${technologies}.`)
}