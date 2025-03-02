function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

function getTicketPrice(age) {
  switch (true) {
    case (age <= 12):
      return 10;
    case (age >= 13 && age <= 17):
      return 15;
    case (age >= 18):
      return 20;
    default:
      return "Invalid age";
  }
}

function fibonacci(n) {
  if (n < 0) return "Invalid input";
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  function check(s) {
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length - 1]) return false;
    return check(s.substring(1, s.length - 1));
  }
  return check(cleaned);
}

console.log("Leap Year Checker:");
console.log("2020:", isLeapYear(2020)); 
console.log("1900:", isLeapYear(1900)); 
console.log("2000:", isLeapYear(2000)); 

console.log("\nTicket Pricing:");
console.log("Age 10:", getTicketPrice(10)); 
console.log("Age 15:", getTicketPrice(15)); 
console.log("Age 25:", getTicketPrice(25)); 
console.log("Fibonacci(6):", fibonacci(6));

console.log("\nPalindrome Checker:");
console.log("'matam':", isPalindrome("matam"));
console.log("'Hello':", isPalindrome("Hello")); 
