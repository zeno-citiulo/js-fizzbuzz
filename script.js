let message = '';

for(let i = 1; i <=100; i++){
  if(!(i % 15)){
    message += 'FizzBuzz';
  } else if(!(i % 3)){
    message += 'Fizz';
  } else if(!(i % 5)){
    message += 'Buzz';
  } else{
    message += i;
  }
  if(i < 100){
    message += ' - ';
  }
}
console.log(message);
