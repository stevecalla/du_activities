// 1) Where is carNoise stored?
// section global exectution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// section global exection context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // section after goFast is stored in global exectuion context speed is declared/created and 80 is assigned; speed is in the functional execution context
  
  // 5) Where is makeNoise stored?
  // section make noise is stored in the function execution context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // section makeNoise is called if goFast is called upon yes in the confirmation box. makeNoise passes carNoise = Honk from the global execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// section a confirmation box is presented/rendered in the browser. if yes then goFast is executed passing in 80
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
