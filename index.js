const student01 = 'Mayk'
const grade01 = 9.8

const student02 = 'Diego'
const grade02 = 10

const student03 = 'Martins'
const grade03 = 6

const average = (grade01 + grade02 + grade03) / 3

if(average > 5) {
  console.log(`Class average: ${average} | Approved class!`)
} else {
  console.log(`Class average: ${average} | Failed class!`)
}