module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  // section
  format_date: (date) => {
    let datePlusFiveYears = new Date(date.getFullYear() + 5, date.getMonth(), 
    date.getDate());
    console.log(date.toLocaleDateString(), datePlusFiveYears.toLocaleDateString());
    return datePlusFiveYears.toLocaleDateString();
  },
};
