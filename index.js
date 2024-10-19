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
    grade: 7
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
    grade: 7
  }
]

function calculateAverage(students) {
  let soma = 0
  
  for (let i = 0; i < students.length; i++) {
    soma = soma + students[i].grade
  }
  
  return soma / students.length
}

function sendMessage(averageClass, classroom) {
  if(averageClass > 5) {
    console.log(`Class average ${classroom}: ${averageClass} | Approved class!`)
  } else {
    console.log(`Class average ${classroom}: ${averageClass} | Failed class!`)
  }
}

function markAsFlunked(student) {
  student.isFailed = false
  
  if (student.grade <= 5) {
    student.isFailed = true
  }
}

function sendMessageFlunked(student) {
  if (student.isFailed) {
    console.log(`${student.name} is failed!`)
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student)
    sendMessageFlunked(student)
  }
}

const averageClassA = calculateAverage(classA)
const averageClassB = calculateAverage(classB)

sendMessage(averageClassA, 'A')
sendMessage(averageClassB, 'B')

studentsFlunked(classA)
studentsFlunked(classB)