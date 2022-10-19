// TODO: Add a comment describing what the `position` parameter means for this function.
const fibonacci = (position, process) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (position < 2) {
    console.log(process, 'c ', position)
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  console.log(process, 'a ', position, 'b ', position - 1, 'c ', position - 2);
  return fibonacci(position - 1, 'z') + fibonacci(position - 2, 'y');
};

// TODO: What will this return?
console.log(fibonacci(5));

//                        fib 5
//      return (fib(4)      +         fib(3))
// return (fib (3) + fib(2) +  ret(fib(2) + fib (1)))
// return(fib(2) + fib(1)) + return(fib(1) + fib(0)) + return(fib(1) + fib(0)) + 1)
// return(fib(1) + fib(0)) + 1 + 1 + 0                + 1 + 0 + 1
// return (1 + 0 + 1 + 1 + - + 1 + - + 1)
// 5

//9
//9-1=8 & 9-2=7 = 15

//8
//8-1=7 & 8-2=6 = 13
