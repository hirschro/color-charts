// ------------ navbar ------------------ //
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function navDropdown() {
  document.getElementById('dropdown-content').classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
// window.onmouseover = function(e) {
//   if (!e.target.matches('.dropdownBtn')) {
//   var dropdownContent = document.getElementById("dropdown-content");
//     if (dropdownContent.classList.contains('show')) {
//       dropdownContent.classList.remove('show');
//     }
//   }



//------------- circle1 ----------------- //
var circle1 = document.createElement('div');
circle1.className = "hide1";
document.getElementById('cm1');
cm1.addEventListener("click", function(){
    if(circle1.className === "hide1") {
        circle1.className = "";
    } else  {
        circle1.className = "hide1";
    }
});

document.getElementById("container1");
container1.appendChild(circle1);

//------------- circle2 ------------------
var circle2 = document.createElement('div');
circle2.className = "hide2";
document.getElementById('cm2');
cm2.addEventListener("click", function(){
    if(circle2.className === "hide2") {
        circle2.className = "";
    } else {
        circle2.className = "hide2";
    }
});
document.getElementById("container1");
container1.appendChild(circle2);

//------------  circle3 -------------------
var circle3 = document.createElement('div');
circle3.className = "hide3";
document.getElementById('cm3');
cm3.addEventListener("click", function(){
    if(circle3.className === "hide3") {
        circle3.className = "";
    } else  {
        circle3.className = "hide3";
    }
});
document.getElementById("container1");
container1.appendChild(circle3);

// --- chip4 (Random Color Pad)  ---
// -----------------------------------------------------------------

const btn = document.getElementById("sqNavbox");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        e.target.style.backgroundColor = rndCol;
}
btn.addEventListener('click', bgChange);


// ------------------------------------------------------------------
var chip4 = document.createElement("div");
chip4.setAttribute("id", "chip4");
var textCont4 = document.createElement("span");
textCont4.innerText = "Box 3";
textCont4.setAttribute("id", "box3");
document.getElementById("container2");
// container2.appendChild(textCont4);
container2.appendChild(chip4);

//--- random color selector ---

mouseToColor = function (e){
  // console.log("this is:", this.constructor);
  
  axisX = Math.ceil((e.offsetX/e.target.clientWidth) * 255);
  axisY = Math.ceil((e.offsetY/e.target.clientHeight) * 255);
  axisZ = 128;
  if(e.ctrlKey){
    axisZ = Math.ceil((e.offsetY/e.target.clientHeight) * 255);
  } 

  
  console.log(axisX, axisY, axisZ);
  
  this.innerText = (axisX, axisY, axisZ);
  this.style.background = `rgb(${axisX}, ${axisY},${axisZ})`;
  // console.log(`rgb(${e.clientX}, ${e.clientY},255)`);
};


block = document.getElementById("chip4");
block.handleEvent = mouseToColor;
pad = document.getElementById("mousePad");
pad.addEventListener("mousemove", block);
// addEventListener takes an event name and a function or an object with an 
  // handleEvent property set to a function, to handle the event

//--- chip 1 ---
var chip1 = document.createElement('div');
chip1.setAttribute("id", "chip1");
document.getElementById('container3');
container3.appendChild(chip1);

// document.getElementById("chip1").setAttribute("style", "transform: scale(-1); max-width: 100%; height: auto;");
  
//--- chip 2 ---
var chip2 = document.createElement('div');
chip2.setAttribute("id", "chip2");
document.getElementById('container3');
container3.appendChild(chip2);

//--- chip 3 ---
var chip3 = document.createElement('div');
chip3.setAttribute("id", "chip3");
document.getElementById("container3");
container3.appendChild(chip3);






