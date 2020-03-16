let div = $('<div></div>');
let ul = $('<ul></ul>')
$('body').append(div);
$(div).append(ul);

let fizzBuzz = function(n) {
    let output = [""];
    for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output = "FizzBuzz"
    } else if (i % 3 === 0) {
        output = "Fizz"
    } else if (i % 5 === 0) {
        output = "Buzz"
    } else {
        output = i
    }
      $(ul).append(`<li>${output}</li>`);
    }
    return output;
}


fizzBuzz(15);

