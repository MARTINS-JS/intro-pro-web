const classA = [
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

const classB = [
  {
    name: 'Aya',
    grade: 3
  },
  {
    name: 'Mei',
    grade: 4.6
  },
  {
    name: 'Grey',
    grade: 5
  }
]

function calculateAverage(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3
}

const averageClassA = calculateAverage(classA)
const averageClassB = calculateAverage(classB) 

function sendMessage(averageClass, classroom) {
  if(averageClass > 5) {
    console.log(`Class average ${classroom}: ${averageClass} | Approved class!`)
  } else {
    console.log(`Class average ${classroom}: ${averageClass} | Failed class!`)
  }
}

sendMessage(averageClassA, 'A')
sendMessage(averageClassB, 'B')