function collision(x1, y1, radius1, x2, y2, radius2) {
    // collision?
}



console.log(collision(1, 1, 1, 1.1, 1.1, 0.1), true, "Expected true.");
console.log(collision(-1, 1, 10, -10.1, 1.1, 1), true, "Expected true.");
console.log(collision(-5, 5, 5.0001, 5, -5, 5*Math.sqrt(5)), true, "Expected true.");
console.log(collision(1, 1, 0.01, 1, 1.1, 0.01), false, "Expected false.");
console.log(collision(-1, 1, 6, -10.1, 1.1, 1), false, "Expected false.");
console.log(collision(-5, 5, 5.0001, 5, -5, 4*Math.sqrt(5)), false, "Expected false.");



/*
https://www.codewars.com/kata/599da159a30addffd00000af/train/javascript


Create a function to determine whether or not two circles are colliding.
You will be given the position of both circles in addition to their radii:
function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.
Here's a geometric diagram of what the circles passed in represent:
alt text
*/