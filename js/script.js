var triangleTracker = function(length, width, breadth)
{

  length = document.getElementById("userLength").value;
  breadth = document.getElementById("userBreadth").value;
  width = document.getElementById("userHeight").value;


  if (length <= 0 || breadth <= 0 || width <= 0)
  {
    alert("The numbers you entered are either less than or Equals to Zero or are not Numbers")
  } else if (length === width && length === breadth && breadth === width)
  {
    alert("This is an Equilateral Triangle Since All The Dimensions Are Equal");
  }
  else if ((length === width )|| (length === breadth) || (breadth === width))
  {
    alert("This is an Isosceles Triangle Since Two Dimensions Are Equal");
  }
  else if ((length + width) <= breadth || (length + breadth) <= width || (width + breadth) <= length)
  {
    alert("This is not a triangle");
  }

  else
  {
    alert("This is a Scalene Triangle");
  }
  return answer;
}

var refresh=function ()
{
  document.getElementById("formElements").reset();
}
