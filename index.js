//The variables to Dom elements we want to manipulate
let surfaceAreaInput = document.getElementById("area");
const SUBMIT_BUTTON = document.getElementById("submitButton");
const CLOSE_BUTTON = document.getElementById("reportButton");
const REPORT_DIV = document.getElementById("report");
const BRICK_AREA = 0.03125;      //The area is in square metres and refers to a specific interlocking brick
const AVERAGE_NUMBER_OF_BRICKS_PER_50KG_CEMENT = 170;
const OUTPUT_AREA = document.getElementById("outputArea"); //The report is contained here

SUBMIT_BUTTON.onclick = ()=>{

    let numberOfBricks = getNumberOfBricks();
    let bagsOfCementRequired = getCementRequired();
    let sandKilosRequired = getSandRequired();
    //Stores String to be output to screen
    let report = "You need a minimum of " + numberOfBricks + " bricks." + 
                 "\n You need a minimum of " + bagsOfCementRequired + " bags of 50kg cement to make bricks."
                 + "\n You need a minimum of " + sandKilosRequired + " Kgs of sand to make bricks.";
    //Display report 
    REPORT_DIV.innerHTML = report;
    OUTPUT_AREA.style.display = "block";
    
    //When the close button is clicked, the report should close
    CLOSE_BUTTON.onclick = ()=>{
        
        OUTPUT_AREA.style.display = "none";
    }     
}


/*This method computes the bricks required to build a
structure of the surface area given as input */
const getNumberOfBricks = ()=> surfaceAreaInput.value/BRICK_AREA;

/*A method to compute the amount of cement bags will be needed
Where each bag is 50kgs*/
const getCementRequired = ()=> getNumberOfBricks() / AVERAGE_NUMBER_OF_BRICKS_PER_50KG_CEMENT;

/*When making interlocking bricks, the cement is only 8% of the mixture
And 92% is sand. To find amount of sand we can use the next method*/
const getSandRequired = ()=> {
  //Stores the kilograms of cement required to make bricks
let cementInKg = getCementRequired() * 50;
//Stores the amount of the cement and sand mixture in Kgs
let totalMixtureInKg = cementInKg / 0.08;
//The sand is 92% of the total 

return totalMixtureInKg * 0.92;

}