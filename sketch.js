var skyColor, cloud, rightCreature, leftCreature;

function setup () {
  createCanvas(400, 400);

  skyColor = color(100, 200, 255);
  cloud = {
    color: color(255, 255, 255, 250),
    height: 100,
    yOffset: 50,
  };

  rightCreature = {
    color1: color(142, 68, 173),
    color2: color(247, 220, 111),
    height: 0.5,
    width: 60,
    xOffset: 80,
  };

  leftCreature = {
    color1: color(231, 76, 60),
    color2: color(88, 214, 141),
    height: 0.8,
    width: -80,
    xOffset: -50,
  };
  
   background(skyColor);
   
 // Bonus 1
//print("value == 5 means that value equals 5, while value = 5 means that the number 5 is assigned to the variable value");     

}

function draw () {
 background(skyColor);       //creates the background color
  helperDrawCloud();          //draws the cloud
  helperDrawRightCreature(); //draws creature on the right side of the cloud
  helperDrawLeftCreature(); //draws creature on the left side of the cloud
 
}

  function helperDrawRightCreature() {    //function for right creature
    fill(rightCreature.color1);
  ellipse(mouseX + rightCreature.width, mouseY + rightCreature.height, rightCreature.xOffset, rightCreature.xOffset);
    fill(rightCreature.color2);
  rect(mouseX + rightCreature.width, mouseY + rightCreature.height, rightCreature.xOffset, 40);  
    
  }

function helperDrawLeftCreature() {     //function for left creature
  fill(leftCreature.color1);
  ellipse(mouseX + leftCreature.width, mouseY + leftCreature.height, leftCreature.xOffset, leftCreature.xOffset);
  fill(leftCreature.color2);
  stroke(leftCreature.color1);
  rect(mouseX + leftCreature.width, mouseY + leftCreature.height, leftCreature.xOffset, 60);
  
}
  

function mousePressed() {  //changes the color of the background when the mouse is pressed 
console.log("mouse was pressed");
  setRed();
}



function setRed() {                               // changes the color of the background when 
  var randomRed = Math.floor(random(0, 155));
  var colorNew = color(randomRed,100,200);
  skyColor = colorNew;
  
  console.log(colorNew);
}
// #4b Use randomRed and setRed() to change skyColor

// Bonus 2
