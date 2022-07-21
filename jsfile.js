
let max = 16;

let i = 0;
let j = 0;

let d = 0;
let er = 0;
let ra = 0;


let rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("demo");
output.innerHTML = rangeslider.value;
  
rangeslider.oninput = function() {

  output.innerHTML = this.value;
  max = this.value;
  deleteChildren();
  loadGrid();

}

const outerBoxes = document.querySelector('#outer');

//buttons
const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', eraseColor);
const rainbow = document.querySelector('#rainbow-pen');
rainbow.addEventListener('click', rainbowColor);
const resetFunc = document.querySelector('#reset');
resetFunc.addEventListener('click', resetButton);


loadGrid();
function loadGrid(){
  let boxDimensions = 600/max + 'px' ;

   for(j=0; j<max; j++){
 
     const innerBoxes = document.createElement('div');
     innerBoxes.classList.add('innerBoxes');
     outerBoxes.appendChild(innerBoxes);
    for(i=0; i<max; i++){

    const box = document.createElement('div'); //creates the box
    box.classList.add('box');
    //only adds event listener to the first row
    box.addEventListener('mouseover', changeColor);
    box.style.width = boxDimensions; 
    box.style.height = box.style.width -2;
    box.style.backgroundColor = 'pink';
    innerBoxes.appendChild(box);
    innerBoxes.style.display = 'flex';
    innerBoxes.style.justifyContent = 'center';
    innerBoxes.style.gap = '2px';
    innerBoxes.style.flex = '1 1 auto';
    
    }
  
  }

}


    function changeColor(e){
       
      if(er==0 && ra==0){
       this.style.backgroundColor = 'black';
      }

      else if(er==1 && ra==0){
        this.style.backgroundColor = 'pink';
      }

      else if(er==0 && ra==1){
        
        let r = rainbowGenerator();
        let g = rainbowGenerator();
        let b = rainbowGenerator();
        let rgbval = "rgb(" + r + "," + g + "," + b + ")"; 
        this.style.backgroundColor = rgbval;

      }
    

    }

    function eraseColor(e){

     

      if(er == 0){
        ra = 1;
        rainbowColor(); 
        eraser.style.backgroundColor = 'black';
        er = 1;
      }
      else 
      {er = 0;
        eraser.style.backgroundColor = 'pink';
      }


    }

   
    function rainbowGenerator(){
      let num =Math.floor(Math.random()*255);
      return num ; //returns a value between 0 and 256 
   

    }
   

    function rainbowColor(){

  
      if(ra == 0){
        er = 1;
        eraseColor(); 
        rainbow.style.backgroundColor = 'black';
        ra = 1;
      }
      else{

        ra = 0;
        rainbow.style.backgroundColor = 'pink';
      }

    }

    function resetButton(){
      location.reload();

    }

    function deleteChildren(){

      while(outerBoxes.lastElementChild){
        outerBoxes.removeChild(outerBoxes.lastElementChild);

      }
    }