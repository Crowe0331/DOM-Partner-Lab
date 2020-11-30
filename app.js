
// Step one
let teamList= document.getElementsByClassName("list")

let listNames= ['Randy', 'Tim', 'Andrew', 'Sandy', 'Cindy']

for(i = 0; i < listNames.length; i++){
    teamList[i].textContent = listNames[i];
}

// Step two
let imgSize = prompt("Enter small or large");
let philly= document.getElementById("philly");

if(imgSize == "small"){
    philly.setAttribute("width", "250px");
    philly.setAttribute("height","400px");
} else if(imgSize == "large"){
    philly.setAttribute("width", "500px");
    philly.setAttribute("height", "800px");
}else{
    prompt("Try again!");
}

// Step three
let userColor= prompt("Insert a background color. Choose from red, blue or green")

if(userColor== "red"){
    document.body.style.backgroundColor = "rgba(255, 0, 0)";
}else if(userColor== "blue"){
    document.body.style.backgroundColor = "rgba(34, 167, 240, 1)";
}else if(userColor== "green"){
    document.body.style.backgroundColor = "rgba(22, 160, 133, 1)";
}else{
    prompt("Try again!")
}

// Step 4

for(i = 0; i < 5; i++){
    let team1= prompt("Team member name");
    teamList[i].textContent = team1;
};


