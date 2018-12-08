var video; 
var button1;
var button2;
var button3;
var button4;
var title;
var input;
var snapshots = [];
var inputText= [];
var smallTitle= [];

var state= true;
var n= 0;

var w = 400;
var h = 300;
var x = 0;
var y = 1200;


function setup() {
    
    var can= createCanvas(windowWidth,2000);
    can.position(0, 0);
	background(255, 255, 255, 0); 

	video = createCapture(VIDEO);
	video.size(600, 450);
    video.position(530,120);
            
    //caption style on saved small image
    textSize(20);
    stroke(0);          
    strokeWeight(3);
    fill(255);
    textAlign(CENTER, CENTER);
     
    //input box should be hidden at beginning
    input= document.getElementById("input"); 
    input.style.opacity= "0.0";
    //input.hide();
}

function takesnap() {
    console.log("clicked!");
    if(state== true){
        snapshots.push(video.get());
        video.hide();  
    for (var i = 0; i < snapshots.length; i++) {              
        image(snapshots[i], 529, 119, 1200, 900);
     }
           
    }else{       
        video.show();      
    }

    
    state=!state;
    console.log(state);       
}

function savememe() { 
  
    title= document.getElementById("top"); //title is the 1st caption
    inputText[n]= input.value;
    //make smalltitle as an array 
    smallTitle[n]= title.innerHTML;
    title.innerHTML= '';
    console.log(n);
    console.log(inputText[n]);


    for (var i = 0; i < snapshots.length; i++) {        
        image(snapshots[i], x+30, y, w, h); //working well!!     
        //picture frame decoration 
        stroke(204, 101, 192);
        fill(0,0,0,0);
        rect(x+30, y, 201, 150); //picture frame       
    }
    
    if(n== 0){
        for (var i= 0; i< smallTitle.length; i++){
            textSize(20);
            textFont('Impact');
            stroke(0);          
            strokeWeight(3);
            fill(255);        
            text(smallTitle[i], x+130, y+10); //change the postion of small caption
        }
    }else{
        //for (var i= 0; i< inputText.length; i++){
            textSize(20);
            textFont('Impact');
            stroke(0);          
            strokeWeight(3);
            fill(255);
            text(inputText[n], x+130, y+10);
        //}        
    }   
        x+=230;
    
    if (x > 1500) {
         x = 0;
         y = y + 300; //change position of small pictures
        }
       
    n++;    
           
    
}

function addcaption() {     
    input.value= ''; 
    input.style.opacity= "1.0";   
}

//    
//function modifymeme() {
//    
//}
    
    
function draw() {
    tint(mouseX, mouseY, 255);	
    
//    gif_createImg.position(50, 350);
}


