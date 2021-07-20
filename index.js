//The variables to Dom elements we want to manipulate
let surfaceAreaInput = document.getElementById("area");
const SUBMIT_BUTTON = document.getElementById("submitButton");
const CLOSE_BUTTON = document.getElementById("reportButton");
const REPORT_DIV = document.getElementById("report");
const BRICK_AREA = 0.03125;      //The area is in square metres and refers to a specific interlocking brick
const AVERAGE_NUMBER_OF_BRICKS_PER_50KG_CEMENT = 170;




/*This method computes the bricks required to build a
structure of the surface area given as input */
const getNumberOfBricks = ()=> surfaceAreaInput.value/BRICK_AREA;

/*A method to compute the amount of cement bags will be needed
Where each bag is 50kgs*/
const getCementRequired = ()=> getNumberOfBricks / AVERAGE_NUMBER_OF_BRICKS_PER_50KG_CEMENT;
