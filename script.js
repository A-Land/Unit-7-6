var answer = 5 
var guess = prompt ('what is your guess?')
if (answer == guess) {
  console.log('you are correct')
} else if (guess > answer) { 
  console.log('your answer is too high')
}
else if (guess < answer) {
  console.log('your answer is too low')
}
