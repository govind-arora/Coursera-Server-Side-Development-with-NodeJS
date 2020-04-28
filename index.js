var rect = "./rectangle";

function solveRect(l, b) {
  console.log("Solving");
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log("Area: " + rectangle.area());
      console.log("Perimeter: " + rectangle.perimeter());
    }
  });
  console.log("Completed");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
