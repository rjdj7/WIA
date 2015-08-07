/*
     Name: John Smith
     Date: 8/06/15
     Class & Section:  WDD333-0, Section 1
     Comments: "HTML5 Canvas Drawing"
 */

if(Modernizr.canvas){
	
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	var theCanvas2 = document.getElementById("Canvas2");
	var ctx2 = theCanvas2.getContext("2d");

	var theCanvas3 = document.getElementById("Canvas3");
	var ctx3 = theCanvas3.getContext("2d");

	var theCanvas4 = document.getElementById("Canvas4");
	var ctx4 = theCanvas4.getContext("2d");

	var theCanvas5 = document.getElementById("Canvas5");
	var ctx5 = theCanvas5.getContext("2d");

	var theCanvas6 = document.getElementById("Canvas6");
	var ctx6 = theCanvas6.getContext("2d");

	var theCanvas7 = document.getElementById("Canvas7");
	var ctx7 = theCanvas7.getContext("2d");
	
}else {
	console.log("Your browser does not support canvas.");
}

/*******************************************

PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Styles
ctx.strokeStyle = "black";
ctx.fillStyle = "blue";

//Rectangle
ctx.strokeRect(0, 0, 50, 100);
ctx.fillRect(0, 0, 50, 100);

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

//Styles
ctx2.strokeStyle = "black";
ctx2.fillStyle = "red";

//Variables
var degrees = 360;
var radians = (degrees/180) * Math.PI;

//Circle
ctx2.beginPath();
ctx2.arc(50, 50, 20, 0, radians);
ctx2.fill();
ctx2.stroke();

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

//Styles
ctx3.strokeStyle = "black";
ctx3.fillStyle = "green";
ctx3.lineWidth = 5;

//Star
ctx3.beginPath();
ctx3.moveTo(100, 50);
ctx3.lineTo(120, 25);
ctx3.lineTo(140, 50);
ctx3.lineTo(170, 60);
ctx3.lineTo(140, 80);
ctx3.lineTo(150, 110);
ctx3.lineTo(120, 90);
ctx3.lineTo(90, 110);
ctx3.lineTo(90, 80);
ctx3.lineTo(70, 60);
ctx3.lineTo(100, 50);

//Make (my sad star) it appear
ctx3.fill();
ctx3.stroke();


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Styles
ctx4.strokeStyle = "purple";
ctx4.fillStyle = "black";
ctx4.lineWidth = 5;

//Bezier Curve
ctx4.beginPath();
ctx4.moveTo(20,100);
ctx4.bezierCurveTo(100,10,200,50,250,100);
ctx4.stroke();		

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Text
var theString = "Hello World. Are you even listening?";			

//Styles
ctx5.font = "20pt Century Schoolbook";
ctx5.fillStyle = "orange";
ctx5.fillText(theString, 20, 60);			


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Variables
var srcImg = document.getElementById("img1");

//Image Normal
ctx6.drawImage(srcImg, 0,0);

//Image Scaled
ctx6.drawImage(srcImg, 25, 25, 120, 150);

//Image Sliced
ctx6.drawImage(srcImg, 140, 20, 30, 70, 25, 25, 85, 140);



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

//Styles
ctx7.strokeStyle = "black";
ctx7.fillStyle = "white";

//Variables
var degrees = 360;
var radians = (degrees/180) * Math.PI;

//Head
ctx7.beginPath();
ctx7.arc(350, 100, 100, 0, radians);
ctx7.fill();
ctx7.stroke();

//Eyes
ctx7.beginPath();
ctx7.arc(320, 70, 20, 0, radians);
ctx7.fill();
ctx7.stroke();

ctx7.beginPath();
ctx7.arc(400, 70, 20, 0, radians);
ctx7.fill();
ctx7.stroke();

//Mouth
ctx7.beginPath();
ctx7.moveTo(320,150);
ctx7.bezierCurveTo(400, 150, 400, 150, 400, 140);
ctx7.stroke();

//Speech
var theString = "Yo!";			
ctx7.font = "20pt Century Schoolbook";
ctx7.fillStyle = "blue";
ctx7.fillText(theString, 450, 175);	

