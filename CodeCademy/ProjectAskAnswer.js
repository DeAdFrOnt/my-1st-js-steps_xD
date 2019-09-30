//out hello user
let userName='Max'
userName?console.log(`Hello,${userName}!`):console.log('Hello!')
//out random number for quest and answ
let randomNumber=Math.floor(Math.random()*7)
//out user question
let userQuestion=''
switch(randomNumber){
  case 0:
  userQuestion =('How are u?')
  	break;
  case 1:
  userQuestion =('Are u sure about living me alone at this path?!!')
  	break;
  case 2:
  userQuestion =('Make joke!')
  	break;
  case 3:
  userQuestion =('And what about im thinking?')
  	break;
  case 4:
  userQuestion =('Trying to remember how much I made misstakes')
  	break;
  case 5:
  userQuestion =('I think u stupid! xD')
  	break;
  case 6:
  userQuestion =('How am i look?')
  	break;
  case 7:
  userQuestion =('Will i have a girl?')
  	break;
  default:
  userQuestion =('Not seen a question here!')
  	break; 
}
console.log(`The ${userName} asked: ${userQuestion}`)
//out answer to user question
let eightBall=''
switch(randomNumber){
  case 0:
  eightBall =('It is certain')
  	break;
  case 1:
  eightBall =('It is decidedly so')
  	break;
  case 2:
  eightBall =('Reply hazy try again')
  	break;
  case 3:
  eightBall =('Cannot predict now')
  	break;
  case 4:
  eightBall =('Do not count on it')
  	break;
  case 5:
  eightBall =('My sources say no')
  	break;
  case 6:
  eightBall =('Outlook not so good')
  	break;
  case 7:
  eightBall =('Signs point to yes')
  	break;
  default:
  eightBall =('How dare u ARE!!!')
  	break; 
}
console.log(`The eight ball answered: ${eightBall}`)







