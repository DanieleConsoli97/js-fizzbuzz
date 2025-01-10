let num = 0;
let i = 1;

for (let i = 1; i <= 100; i++) {
  num = num + 1;
  // controllo se il numero è divisibile per 3 e 5
  if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
  } else if (num % 3 == 0) {
    console.log("Fizz");
  } else if (num % 5 == 0) {
    console.log("Buzz");
  } else{
    console.log(num)
  }
}
