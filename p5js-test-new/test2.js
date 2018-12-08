//var buttononeone = document.getElementById("buttononeoneone");
//
//var ifClick = false;
var state = true; 
var snapshots = [];

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

function setup() {
    
    var can= createCanvas(windowWidth,1000);
    can.position(0, 0);
	background(255, 255, 255, 0); 

	video = createCapture(VIDEO);
	video.size(600, 450);
    video.position(530,120);
    
  
     
//    button1 = createButton('SNAP YOUR MEME'); 
//    buttononeone.mousePressed(takesnap);
//    button1.size(300, 80);
//    button1.position(500, 650);
    
//    button2 = createButton('ADD YOUR CAPTION'); 
//    button2.mousePressed(addcaption);
//    button2.size(300, 80);
//    button2.position(820, 650);
//    
//    button3 = createButton('SAVE'); 
//    button3.mousePressed(savememe);
//    button3.size(80, 80);
//    button3.position(1200, 400);
//    
//    button4 = createButton('MODIFY'); 
//    button4.mousePressed(modifymeme);
//    button4.size(80, 80);
//    button4.position(1200, 500);
    
    //button4.backgroundColor(255, 0, 0); 
    
        
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



//function savememe() { 
//  
//    title= document.getElementById("top"); //title is the 1st caption
//    inputText[n]= input.value;
//    smallTitle[n]= title.innerHTML;
//    title.innerHTML= '';
//
//    console.log(n);
//    console.log(inputText[n]);
//
//
//    for (var i = 0; i < snapshots.length; i++) {        
//        image(snapshots[i], x, y, w, h);        
//    }  
//    if(n== 0){
//        for (var i= 0; i< smallTitle.length; i++){
//            text(smallTitle[i], x+100, y);
//        }
//    }else{
//             text(inputText[n], x+100, y);
//               
//    }
//        x+=200;
//        n++;    
//}


//
//function addcaption() {     
//    input.value= ''; 
//    input.style.opacity= "1.0";
//    
//}
//    
//function modifymeme() {
//    
//}
    
    
function draw() {
    tint(mouseX, mouseY, 255);	

}
