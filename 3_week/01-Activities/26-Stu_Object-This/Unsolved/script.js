// TODO: What does 'this' refer to?
console.log(this); //called the window object

// TODO: What does 'this' refer to?
function helloThis() { 
   console.log("Inside this function, this is " + this); //refers to the helloThis function/object
   }

// TODO: What will this log? //this will log 20
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

// TODO: What will this log?  //this will log the result of 5000 * 1.15 which is 5,750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results! in the console
helloThis();

// TODO: After commenting, check your results! in the console
child.ageTenYears();
investor.investment.investmentGrowth();
