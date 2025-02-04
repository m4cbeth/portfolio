const butt = document.getElementById('convert-btn')
const output = document.getElementById('output')
const input = document.getElementById('number')

butt.addEventListener('click',()=>{
  const value = parseInt(input.value)
  if (input.value == "") {
    output.innerText = "Please enter a valid number"
    return
  } else if (input.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1"
    return
  } else if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999"
    return
  }

  let remaining = value
  let arabicNumber = ""
  while (remaining >= 1000) {
    arabicNumber += "M"
    remaining -= 1000
  }
  if (remaining >= 500) {
    if (Math.floor(remaining/100) == 9) {
      arabicNumber +="CM"
      remaining -= 900
  } 
  
  if (Math.floor(remaining/500) >= 1) {
    let counter = Math.floor(remaining/100) - 5
    arabicNumber += "D"
    remaining -= 500
    counter -= 1
    while (counter > -1){
      arabicNumber += "C"
      remaining -= 100
      counter --
    }
  } 
} 
if (remaining/100 >= 1) {
    if (Math.floor(remaining/100) == 4) {
      arabicNumber += "CD"
      remaining -= 400
    }
    let counter = Math.floor(remaining/100)
    while (counter > 0) {
      counter --
      remaining -= 100
      arabicNumber += "C"
    }
}

if (remaining/10 >= 1) {
  if (Math.floor(remaining/10) == 9) {
    arabicNumber += "XC"
    remaining -= 90
  }
  if (Math.floor(remaining/50) >= 1) {
    arabicNumber += "L"
    remaining -= 50
  }
  if (Math.floor(remaining/10) == 4) {
    arabicNumber += "XL"
    remaining -= 40
  }
  let count = Math.floor(remaining/10)
  while (count > 0) {
    remaining -= 10
    arabicNumber += "X"
    count --
  }
}

if (remaining >= 1) {
  if (remaining == 9) {
    arabicNumber += "IX"
    remaining -= 9
  }
  if (remaining >= 5) {
    arabicNumber += "V"
    remaining -= 5
  }
  if (remaining == 4) {
    arabicNumber += "IV"
    remaining -= 4
  }
  while (remaining > 0) {
    arabicNumber += "I"
    remaining --
  }
}





  output.innerText = arabicNumber
})
