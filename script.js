// Sets default value.
let fifthAnswer = 0

// Connects button that allows users to submit their answers to JavaScript.
document.getElementById('fifth-submit').addEventListener('click', fifthSubmit)
// Connects button that allows users to reveal a hint to JavaScript.
document.getElementById('fifth-hint').addEventListener('click', fifthHint)

// Creates function that activates when the user clicks on "Submit" for the fifth riddle.
function fifthSubmit () {
  fifthAnswer = document.getElementById('fifth-answer').value
  if (fifthAnswer === 'lucky charms') {
    document.getElementById('fifth-outcome').innerHTML = ('Correct, please proceed.')
  } else {
    document.getElementById('fifth-outcome').innerHTML = ('Incorrect, try again.')
  }
}

// Creates function that reveals an image when the user clicks on "Hint" for the fifth riddle.
function fifthHint () {
  document.getElementById('fifthPicture').style.display = 'block'
}
