var triangleTracker = function(length, width, breadth) {
  if (length <= 0 || breadth <= 0 || width <= 0) {
    console.log("The numbers you entered are either less than or Equals to Zero or are not Numbers")
  } else if (length === width && length === breadth && breadth === width) {
    console.log("This is an Equilateral Triangle Since All The Dimensions Are Equal");
  } else if (length === width || length === breadth || breadth === width) {
    console.log("This is an Isosceles Triangle Since Two Dimensions Are Equal");
  } else if (length + width > breadth || (length + breadth > width) || (width + breadth > length)) {
    console.log("This is A Scalene Triangle Since All Dimensions Are Not Equal");
  } else {
    console.log("Try again");
  }
}
var userLength=prompt("kindly enter the Length of the triangle to determine the type of triangle");
var userBreadth=prompt("kindly enter the Length of the triangle to determine the type of triangle");
var userHeight=prompt("kindly enter the Length of the triangle to determine the type of triangle");

alert(triangleTracker(userLength,userBreadth,userHeight));
