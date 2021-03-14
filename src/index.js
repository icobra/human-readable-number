module.exports = function toReadable (number) {
  let simple_numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let big_numbers = ['0','0','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let answer = "";

  function simple_number(number, arr){
    return arr[number];
  };
  
  function two_digit_number(number, simple_arr, big_arr){
    let str_number = number.toString();
    if(number % 10 == 0){
      return big_arr[parseInt(str_number[0])];
    } else {
      return big_arr[parseInt(str_number[0])]+ " " + simple_arr[parseInt(str_number[1])];
    }
  }

  if(number < 20){
    answer = simple_number(number, simple_numbers);
  } else if(number < 100){
    answer = two_digit_number(number, simple_numbers, big_numbers);
  } else if(number % 100 === 0){
    number = number.toString();
    answer = (simple_number(parseInt(number[0]), simple_numbers) + " hundred");
  } else {
    number = number.toString();
    answer = (simple_number(parseInt(number[0]), simple_numbers) + " hundred");
    number = parseInt(number[1] + number[2]);
    if(number < 20){
      answer = answer + " " + simple_number(number, simple_numbers);
    } else {
      answer = answer + " " + two_digit_number(number, simple_numbers, big_numbers);
    }
  }

 return answer;
}
