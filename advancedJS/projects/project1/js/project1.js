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
    const SOCIAL_SECURITY_CAP = 137000;
    const SOCIAL_SECURITY_RATE = .062;

    // constants for Medicare calculations
    const MEDICARE_CAP = 200000
    const MEDICARE_RATE_1 = .0145;
    const MEDICARE_RATE_2 = .0235;

    //Declare project variables with assignment where required
    let userInput = document.querySelector("#grossSalary");
    let salary = userInput.value;
    let fedTax;
    let stateTax;
    let socialSecurity;
    let medicare;
    let totalDeduction;
    let netPay; 
    
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
    
    //calculate Social Security deduction

    if (salary <= SOCIAL_SECURITY_CAP ) {
        socialSecurity = salary * SOCIAL_SECURITY_RATE;
    } else {
        socialSecurity = SOCIAL_SECURITY_CAP * SOCIAL_SECURITY_RATE;
    }

    //calculate medicare deduction

    if (salary <= MEDICARE_CAP) {
        medicare = salary * MEDICARE_RATE_1;
    } else {
        medicare = (MEDICARE_CAP * MEDICARE_RATE_1) + 
                ((salary - MEDICARE_CAP) * MEDICARE_RATE_2);
    }

    // clean up variables and perform calculations for total deductions and net pay
    stateTax = stateTax.toFixed(2);
    medicare = medicare.toFixed(2);
    fedTax = fedTax.toFixed(2);
    socialSecurity = socialSecurity.toFixed(2);
    totalDeduction = parseInt(fedTax) + parseInt(stateTax) + 
            parseInt(socialSecurity) + parseInt(medicare);
    totalDeduction = totalDeduction.toFixed(2);
    netPay = parseInt(salary) - parseInt(totalDeduction);
    netPay = netPay.toFixed(2);

    //Create and output table with tax and salary data

    let table = document.createElement("TABLE");
    table.setAttribute("id", "taxCalculations");
    document.body.appendChild(table);

    let row1 = document.createElement("TR");
    row1.setAttribute("id", "grossPay");
    document.querySelector("#taxCalculations").appendChild(row1);

    let row1TD1= document.createElement("TD");
    let row1Cell1 = document.createTextNode("Gross Salary");
    row1TD1.appendChild(row1Cell1);
    document.querySelector("#grossPay").appendChild(row1TD1);

    let row1TD2= document.createElement("TD");
    let row1Cell2 = document.createTextNode(salary);
    row1TD2.appendChild(row1Cell2);
    document.querySelector("#grossPay").appendChild(row1TD2);


    let row2 = document.createElement("TR");
    row2.setAttribute("id", "federalTaxes");
    document.querySelector("#taxCalculations").appendChild(row2);

    let row2TD1= document.createElement("TD");
    let row2Cell1 = document.createTextNode("Federal Taxes");
    row2TD1.appendChild(row2Cell1);
    document.querySelector("#federalTaxes").appendChild(row2TD1);

    let row2TD2= document.createElement("TD");
    let row2Cell2 = document.createTextNode(fedTax);
    row2TD2.appendChild(row2Cell2);
    document.querySelector("#federalTaxes").appendChild(row2TD2);


    let row3 = document.createElement("TR");
    row3.setAttribute("id", "stateTaxes");
    document.querySelector("#taxCalculations").appendChild(row3);

    let row3TD1= document.createElement("TD");
    let row3Cell1 = document.createTextNode("State Taxes");
    row3TD1.appendChild(row3Cell1);
    document.querySelector("#stateTaxes").appendChild(row3TD1);

    let row3TD2= document.createElement("TD");
    let row3Cell2 = document.createTextNode(stateTax);
    row3TD2.appendChild(row3Cell2);
    document.querySelector("#stateTaxes").appendChild(row3TD2);


    let row4 = document.createElement("TR");
    row4.setAttribute("id", "socialSecurity");
    document.querySelector("#taxCalculations").appendChild(row4);

    let row4TD1= document.createElement("TD");
    let row4Cell1 = document.createTextNode("Social Security");
    row4TD1.appendChild(row4Cell1);
    document.querySelector("#socialSecurity").appendChild(row4TD1);

    let row4TD2= document.createElement("TD");
    let row4Cell2 = document.createTextNode(socialSecurity);
    row4TD2.appendChild(row4Cell2);
    document.querySelector("#socialSecurity").appendChild(row4TD2);


    let row5 = document.createElement("TR");
    row5.setAttribute("id", "medicare");
    document.querySelector("#taxCalculations").appendChild(row5);

    let row5TD1= document.createElement("TD");
    let row5Cell1 = document.createTextNode("Medicare");
    row5TD1.appendChild(row5Cell1);
    document.querySelector("#medicare").appendChild(row5TD1);

    let row5TD2= document.createElement("TD");
    let row5Cell2 = document.createTextNode(medicare);
    row5TD2.appendChild(row5Cell2);
    document.querySelector("#medicare").appendChild(row5TD2);


    let row6 = document.createElement("TR");
    row6.setAttribute("id", "totalDeductions");
    document.querySelector("#taxCalculations").appendChild(row6);

    let row6TD1= document.createElement("TD");
    let row6Cell1 = document.createTextNode("Total Deductions");
    row6TD1.appendChild(row6Cell1);
    document.querySelector("#totalDeductions").appendChild(row6TD1);

    let row6TD2= document.createElement("TD");
    let row6Cell2 = document.createTextNode(totalDeduction);
    row6TD2.appendChild(row6Cell2);
    document.querySelector("#totalDeductions").appendChild(row6TD2);

    let row7 = document.createElement("TR");
    row7.setAttribute("id", "netPay");
    document.querySelector("#taxCalculations").appendChild(row7);

    let row7TD1= document.createElement("TD");
    let row7Cell1 = document.createTextNode("Net Pay");
    row7TD1.appendChild(row7Cell1);
    document.querySelector("#netPay").appendChild(row7TD1);

    let row7TD2= document.createElement("TD");
    let row7Cell2 = document.createTextNode(netPay);
    row7TD2.appendChild(row7Cell2);
    document.querySelector("#netPay").appendChild(row7TD2);
}