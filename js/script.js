var triangleTracker=function(length,width,breadth)
{
if ((length===width && length===breadth && breadth===width)&& length>0 && breadth>0 && width>0)
{
console.log("This is an Equilateral Triangle because the length Are Equal");
}
else
{
console.log("One value is greater than or equals to zero");
}
}
alert(triangleTracker(10,10,10));
