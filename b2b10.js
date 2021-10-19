function reverseString(str) {
    return str.split("").reverse().join("");
}

function getString() {
  let str = document.getElementById("fname").value;
  
  toBase10(str)
}

function getBinary() {
  let str = document.getElementById("binary").value;
  
  toBase2(str)
}






function toBase10(num) {
  var revnum = reverseString(num.toString())

  var numarray = [

  ]


  for (let i = 0; i < revnum.length; i++) {
    let number = revnum.charAt(i)
    basenum = number * 2**i // the actual formula
    numarray.push(basenum)
  };

  let sum = 0;

  for (let i = 0; i < numarray.length; i++) {
    sum += numarray[i];
  }

  document.getElementById("p1").innerHTML = sum
}
