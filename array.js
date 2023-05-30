$(document).ready(function() {

    $(".list .listDrag").draggable(); 

    var numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    var sortedNumbers = numbers.sort(function(first, second) {
      return first - second;
    });

    var filteredNumbers = sortedNumbers.filter(function(num) {
      return num % 2 === 0;
    });   

    var total = 0;
    $.each(filteredNumbers, function(){ total += this });

    console.log("Sorted numbers:", sortedNumbers);
    console.log("Filtered numbers (even numbers):", filteredNumbers);
    console.log("Total remaining:", total);

});