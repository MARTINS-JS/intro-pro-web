const users = [
  { 
    name: "Nicolas", 
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

function hasCSS(technologies) {
  return technologies.includes("CSS")
}

for (let user of users) {
  let checkUserUsesCSS = hasCSS(user.technologies)

  if (checkUserUsesCSS) {
    console.log(`The user ${user.name} works with CSS.`)
  }
}