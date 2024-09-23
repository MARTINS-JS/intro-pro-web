const name = "Igor"
const weight = 70
const height = 1.8

const imc = weight / (height * height)

if ( (imc === 29.9) || (imc >= 30) ) {
  console.log(`${name} you are overweight.`)
} else {
  console.log(`${name} you are not overweight.`)
}