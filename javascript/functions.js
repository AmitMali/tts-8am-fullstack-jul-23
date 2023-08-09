function hello(name = "user") {
  console.log(`hello ${name}`);
}

// hello("amit");
// hello();

function add(no1, no2) {
  console.log(Number(no1) + Number(no2));
}

// add(10, 20);

function oddEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}
// oddEven(10); //it will return but not print on console
// console.log(oddEven(10)); //print on console

function armstrong(num) {
  var total = 0;
  var temp = num;
  while (temp > 0) {
    var lastDigit = Number(temp) % 10;
    temp = parseInt(temp / 10);

    var cube = lastDigit * lastDigit * lastDigit;
    total = total + cube;
  }
  if ((num = total)) {
    return "armstrong";
  } else {
    return "not armstrong";
  }
}

console.log(armstrong(153));
