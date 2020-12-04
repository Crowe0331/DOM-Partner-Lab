
// // Step one
// let teamList= document.getElementsByClassName("list")

// let listNames= ['Randy', 'Tim', 'Andrew', 'Sandy', 'Cindy']

// for(i = 0; i < listNames.length; i++){
//     teamList[i].textContent = listNames[i];
// }

// // Step two
// let imgSize = prompt("Enter small or large");
// let philly= document.getElementById("philly");

// if(imgSize == "small"){
//     philly.setAttribute("width", "250px");
//     philly.setAttribute("height","400px");
// } else if(imgSize == "large"){
//     philly.setAttribute("width", "500px");
//     philly.setAttribute("height", "800px");
// }else{
//     prompt("Try again!");
// }

// // Step three
// let userColor= prompt("Insert a background color. Choose from red, blue or green")

// if(userColor== "red"){
//     document.body.style.backgroundColor = "rgba(255, 0, 0)";
// }else if(userColor== "blue"){
//     document.body.style.backgroundColor = "rgba(34, 167, 240, 1)";
// }else if(userColor== "green"){
//     document.body.style.backgroundColor = "rgba(22, 160, 133, 1)";
// }else{
//     prompt("Try again!")
// }

// // Step 4

// for(i = 0; i < 5; i++){
//     let team1= prompt("Team member name");
//     teamList[i].textContent = team1;
// };


//Part 2

// //Step 1
// let userName = prompt("Enter your username");

// let header= document.createElement("h1");
// let title= document.createTextNode(userName + "'s resume!")
// header.appendChild(title);
// document.body.appendChild(header);

// // Step 2
// let skillArr = ["SKill1", "Skill2", "skill3", "skill4"];
// let userChoice= prompt("Do you want the list ordered or unordered?");
// let list;
  
// if(userChoice == "ordered"){    
//     list= document.createElement("ol");
// }else if(userChoice== "unordered"){
//     list= document.createElement("ul");
// }else (prompt("try again!"));

// for(let i = 0; i < skillArr.length; i++){
//     document.body.appendChild(list)
//     let skills = document.createElement('li')
//     let text = document.createTextNode(skillArr[i]);
//     skills.appendChild(text);
//     list.appendChild(skills);
// }

// // Step 3

// let removeSkill = prompt("Pick a random number 0-3");
// list.children[removeSkill].remove();

//Part 3
//Step 1

//let button = document.querySelector('.button')
//button.addEventListener('click', () => button.style.backgroundColor = 'cyan')


    
//Step 2
// let button = document.querySelector('.button')
// button.addEventListener('click', colorchange)

// function colorchange() {
//     let background = document.querySelector('.button').style.backgroundColor;
//     if (background == "cyan") {
//         document.querySelector('.button').style.backgroundColor = "salmon";
//     } else {
//         document.querySelector('.button').style.backgroundColor = "cyan";
//     }
// }

// Step 3
let button = document.querySelector('.button')
let input = document.querySelector('.input')
button.addEventListener('click', changecolor)

function changecolor() {
    console.log(input.value)
    if (input.value == null || input.value == "") {
        button.style.backgroundColor = "white";
    } else {
        button.style.backgroundColor = input.value;
    }
}




