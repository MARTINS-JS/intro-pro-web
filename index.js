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
  },
  {
    name: 'Novo aluno',
    grade: 5
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
  },
  {
    name: 'Nova aluna',
    grade: 5
  }
]

function calculateAverage(students) {
  let soma = 0
  
  for (let i = 0; i < students.length; i++) {
    soma = soma + students[i].grade
  }
  
  const average = soma / students.length
  
  return average
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