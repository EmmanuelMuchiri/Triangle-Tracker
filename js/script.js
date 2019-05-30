var triangleTracker = function(length, width, breadth) {

  length = document.dimensions.userLength.value;
  breadth = document.dimensions.userBreadth.value;
  width = document.dimensions.userHeight.value;


  if (length <= 0 || breadth <= 0 || width <= 0) {
    alert("The numbers you entered are either less than or Equals to Zero or are not Numbers")
  } else if (length === width && length === breadth && breadth === width) {
    alert("This is an Equilateral Triangle Since All The Dimensions Are Equal");
  } else if ((length === width )|| (length === breadth) || (breadth === width)) {
    alert("This is an Isosceles Triangle Since Two Dimensions Are Equal");
  } else if (length + width > breadth || (length + breadth > width) || (width + breadth > length)) {
    alert("This is A Scalene Triangle Since All Dimensions Are Not Equal");
  } else if ((length + width) <= breadth || (length + breadth) <= width || (width + breadth) <= length) {
    alert("This is not a triangle");
  }
  else {
    alert("This is a Scalene Triangle");
  }
  return answer;
}
function myFunction() {
  document.getElementById("formElements").reset();
}
/*alert(triangleTracker(userLength, userBreadth, userHeight));*/
