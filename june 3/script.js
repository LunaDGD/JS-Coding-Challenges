const difference = (date1, date2) => {
  if (date2 === date1) {
    return 0;
  } else if (date2 > date1) {
    return (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);
  } else {
    return (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24);
  }
};

let myBirthday = "08/19/2000";
let todaysDate = "06/03/2020";

let days = difference(myBirthday, todaysDate);
console.log(
  `The difference of days between my birthday (${myBirthday}) and today's date (${todaysDate}) is ${Math.abs(
    days
  )} days`
);
