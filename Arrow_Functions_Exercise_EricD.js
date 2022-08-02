function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  console.log(double(3));

  //

  const double2 = arr => arr.map(val => val * 2);

  console.log(double2(5));

  //

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  console.log(squareAndFindEvens([3,4,4,3,4,5,6,7,8]))

  //

  const squareAndFindEvens2 = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

  console.log(squareAndFindEvens2([6,7,4,4,3,1,1,5,8])