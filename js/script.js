var triangleTracker=function(length,width,breadth)
{
if (length<=0 || breadth<=0 || width<=0)
{
console.log("The numbers you entered are either less than or Equals to Zero or are not Numbers")
}
else if
(length===width && length===breadth && breadth===width)
{
console.log("This is an Equilateral Triangle because the length Are Equal");
}
else
{
console.log("Try again");
}
}
