const student01 = {
  name: 'Mayk',
  grade: 9.8
}

const student02 = {
  name: 'Diego',
  grade: 10
}

const student03 = {
  name: 'Martins',
  grade: 6
}

const average = (student01.grade + student02.grade + student03.grade) / 3

if(average > 5) {
  console.log(`Class average: ${average} | Approved class!`)
} else {
  console.log(`Class average: ${average} | Failed class!`)
}