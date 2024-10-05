const students = [
  {
    name: 'Mayk',
    grade: 9.8
  },
  {
    name: 'Diego',
    grade: 10
  },
  {
    name: 'Martins',
    grade: 6
  }
]

const average = (students[0].grade + students[1].grade + students[2].grade) / 3

if(average > 5) {
  console.log(`Class average: ${average} | Approved class!`)
} else {
  console.log(`Class average: ${average} | Failed class!`)
}