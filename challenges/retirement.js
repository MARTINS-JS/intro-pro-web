const name = "Igor"
const sex = "M"
const age = 25
const contribution = 8

if (((sex === "M") && (contribution >= 35)) || ((sex === "F") && (contribution >= 30))) {
  if (((sex === "M") && ((contribution + age) >= 95)) || ((sex === "F") && ((contribution + age) >= 85))) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you can't retire yet!`)
  }
} else {
  console.log(`${name}, you can't retire yet!`)
}