// function to block the stack for x number of milliseconds

const pause = milliSeconds => {
  const button = document.querySelector('button');
  button.setAttribute('disabled', 'true');

  let count = 1; 
  let x = setInterval(() => console.log(`${count++} sec`), 1000);

  setTimeout(() => {

    clearInterval(x);

    button.removeAttribute('disabled');
    console.log('button works now')

  }, 8000);

}

pause(8000);

//section original
// const pause = milliSeconds => {
//   // get the current time
//   var startTime = new Date().getTime(); 
//   // block stack until time's up
//   while (new Date().getTime() < startTime + milliSeconds); 
// }

// pause(8000);
