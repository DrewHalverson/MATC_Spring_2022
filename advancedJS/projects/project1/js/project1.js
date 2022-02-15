// Author: Drew Halverson
// Section: Advanced Javascript M/W 2:30
// Date: 2/15/2022

// This function calculates federal and state taxes as well as Social Security 
// and Medicre withholding based on user input. It then outputs the results to 
// a table on the HTML page
const init = () => {
    // constants for federal tax calculation
    const TIER_1 = 9875;
    const TIER_1_RATE = .10;
    const TIER_2 = 40125;
    const TIER_2_RATE = .12;
    const TIER_3 = 85525;
    const TIER_3_RATE = .22;
    const TIER_4 = 163300;
    const TIER_4_RATE = .24;
    const TIER_5 = 207350;
    const TIER_5_RATE = .32;
    const TIER_6 = 518400;
    const TIER_6_RATE = .35;
    const TIER_7_RATE = .37;

    // constants for state tax calculation
    const STATE_TIER_1 = 11970;
    const STATE_TIER_1_RATE = .0354;
    const STATE_TIER_2 = 23930;
    const STATE_TIER_2_RATE = .0465;
    const STATE_TIER_3 = 263480;
    const STATE_TIER_3_RATE = .0627;
    const STATE_TIER_4_RATE = .0765;
    
    // constant for Social Security rate
    const SOCIAL_SECURITY_RATE = .062;

    // constants for Medicare calculations
    const MEDICARE = 200000
    const MEDICARE_RATE_1 = .0145;
    const MEDICARE_RATE_2 = .009;

    //Declare project variables with assignment where required
    let userInput = document.querySelector("#grossSalary");
    let salary = userInput.value;
    let fedTax;
    let stateTax;
    let socialSecurity;
    let medicare;
    
    // calculate federal tax rate
    if (salary <= TIER_1 ) {
        fedTax = salary * TIER_1_RATE;

    } else if (salary > TIER_1 && salary <= TIER_2) {
        fedTax = (TIER_1 * TIER_1_RATE) + ((salary - TIER_1) * TIER_2_RATE);

    } else if (salary > TIER_2 && salary <= TIER_3) {
        fedTax = (TIER_1 * TIER_1_RATE) + ((TIER_2 - TIER_1 ) * TIER_2_RATE) + 
                ((salary - TIER_2) * TIER_3_RATE);

    } else if (salary > TIER_3 && salary <= TIER_4) {
        fedTax = (TIER_1 * TIER_1_RATE) + ((TIER_2-TIER_1) * TIER_2_RATE) + 
                ((TIER_3 - TIER_2) * TIER_3_RATE) + ((salary - TIER_3) * 
                TIER_4_RATE);

    } else if (salary > TIER_4 && salary <= TIER_5) {
        fedTax = (TIER_1 * TIER_1_RATE) + ((TIER_2-TIER_1) * TIER_2_RATE) + 
                ((TIER_3 - TIER_2) * TIER_3_RATE) + ((TIER_4 - TIER_3) * 
                TIER_4_RATE) + ((salary - TIER_4) *TIER_5_RATE);

    } else if (salary > TIER_5 && salary <= TIER_6) {
        fedTax = (TIER_1 * TIER_1_RATE) + ((TIER_2-TIER_1) * TIER_2_RATE) + 
                ((TIER_3 - TIER_2) * TIER_3_RATE) + ((TIER_4 - TIER_3) * 
                TIER_4_RATE) + ((TIER_5 - TIER_4) *TIER_5_RATE) + 
                ((salary -TIER_5) * TIER_6_RATE);

    } else if (salary >= TIER_6) {
        fedTax = (TIER_1 * TIER_1_RATE) + ((TIER_2-TIER_1) * TIER_2_RATE) + 
                ((TIER_3 - TIER_2) * TIER_3_RATE) + ((TIER_4 - TIER_3) * 
                TIER_4_RATE) + ((TIER_5 - TIER_4) *TIER_5_RATE) + 
                ((TIER_6 -TIER_5) * TIER_6_RATE) + ((salary - TIER_6) * 
                TIER_7_RATE);
    }

    //calculate state taxes
    if (salary <= STATE_TIER_1) {
        stateTax = salary * STATE_TIER_1_RATE;

    } else if (salary > STATE_TIER_1 && salary <= STATE_TIER_2) {
        stateTax = (STATE_TIER_1 * STATE_TIER_1_RATE) + ((salary - STATE_TIER_1) 
                * STATE_TIER_2_RATE);

    }else if (salary > STATE_TIER_2 && salary <= STATE_TIER_3) {
        stateTax = (STATE_TIER_1 * STATE_TIER_1_RATE) + ((STATE_TIER_2 - 
                STATE_TIER_1 ) * STATE_TIER_2_RATE) + ((salary - STATE_TIER_2) 
                * STATE_TIER_3_RATE);

    } else if (salary >= STATE_TIER_3) {
        stateTax = (STATE_TIER_1 * STATE_TIER_1_RATE) + ((STATE_TIER_2 - 
            STATE_TIER_1 ) * STATE_TIER_2_RATE) + ((STATE_TIER_3 - STATE_TIER_2) 
            * STATE_TIER_3_RATE) + ((salary - STATE_TIER_3) * STATE_TIER_4_RATE);
    }
    

stateTax = stateTax.toFixed(2);

alert(fedTax + ", " + stateTax);



}
window.addEventListener("submit", init);