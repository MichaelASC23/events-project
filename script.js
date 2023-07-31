// reference to color display
let divRef = document.querySelector("div");

// Color buttons
let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");

// Changing the div and background
// Aqua
aquaButton.onclick = function() {
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";

}
//Teal
tealButton.onclick = function() {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
}
//Pink
pinkButton.onclick = function() {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
}
//Purple
purpleButton.onclick = function() {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
}
//Colorless
colorlessButton.onclick = function() {
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";
}

//Extra Credit: 
// Part 1
// Hide Function
let hideButton = document.getElementById("hide");
hideButton.onclick = function() {
    if(divRef.style.display != "none"){
        divRef.style.display = "none";
        hideButton.innerHTML = "show";
    }
    else{
        divRef.style.display = "flex";
        divRef.style.alignItems = "center";
        hideButton.innerHTML = "hide";
    }
}

// Part 2
// Random Function Attempt
let randColor = ["aqua", "teal", "pink", "purple", "colorless"];
let randomButton = document.getElementById("random");
randomButton.onclick = function() {
    // random number
    let randR = Math.floor(Math.random()*randColor.length);
    //randColor array [random number generated]
    let color = randColor[randR];
    divRef.style.backgroundColor = color;
    divRef.innerHTML = color;
}