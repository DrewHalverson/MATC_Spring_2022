
let labTitle = "Programming for Designers - Lab2";

const init = () => {
    let id;
    let name;
    let bornInMadison;

    id = 10;
    name = "Drew Halverson";
    bornInMadison = false;
    
    console.log("Your ID is " + id + ". Your name is " + name + ". You were"
            + " born in Madison is: " + bornInMadison + ".");
    
    printLabTitle();
}

const printLabTitle = () => {
    console.log(labTitle);
}