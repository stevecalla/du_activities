// TODO: What does 'this' refer to?
console.log(this); //called the window object

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); //refers to the global object again
}

// TODO: What will this log? //this will log 20 as this.age refers to the property/key age in the child object
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log?  //this will log the result of 5000 * 1.15 which is 5,750; this.initialInvestment referes to the property/key investment in the investor object
var investor = {  
  name: "Cash Saver",
  fakeFunction: function() { //section: calla added this to test
    console.log(this.name);
  },
  investment: { //note this is a nested object
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
      console.log(investor.initialInvestment * 1.15) //section: calla added to test
    }
   }   
};

// TODO: After commenting, check your results! in the console
helloThis();

// TODO: After commenting, check your results! in the console
child.ageTenYears();
investor.investment.investmentGrowth();
investor.fakeFunction(); //section: calla added to this test
