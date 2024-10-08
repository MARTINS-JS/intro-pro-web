const company = {
  name: "Rocketseat",
  color: "Purple",
  focus: "Programming",
  address: {
    street: "Rua Guilherme Gembala",
    number: 260
  }
}

const user = {
  name: "Martins",
  company: company
}

console.log(`The company ${user.company.name} is located at ${user.company.address.street}, ${user.company.address.number}.`)