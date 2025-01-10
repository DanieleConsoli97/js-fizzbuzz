let num = 0;
let i = 1;

for (let i = 1; i <= 100; i++) {
  num = num + 1;
  // controllo se il numero è divisibile per 3
  if (num % 3 == 0) {
    // controllo se il numero è divisibile per 5
    if (num % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Fizz");
    }
  } else if (num % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(num);
  } 
}
