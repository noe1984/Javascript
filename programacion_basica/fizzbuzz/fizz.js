const NUM = 100

for (let i = 1; i <= NUM; i++) {
  if (multiplo(i,3)) {
    document.write('fizz')
  }
  if (multiplo(i,5)) {
    document.write('buzz')
  }
  else if (!multiplo(i,3) && !multiplo(i,5)) {
    document.write(i)
  }
  document.write('<br />')
}

function multiplo (numero, divisor) {
  if (numero % divisor === 0) {
    return true
  } else {
    return false
  }
}