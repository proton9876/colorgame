var colorcode;
var score=0;
var final;



function randomnumber(start,end){
    let arandomnumber=Math.floor(Math.random() * (end - start) + start);
    return arandomnumber;
    
}


function randomcolorcode(){
    var colorcode='';
    for(let i=0;i<3;i++){
  
                let rand=randomnumber(0,255);
                if(i==0){
                    colorcode=colorcode+rand;
        }
                else{
                    colorcode=colorcode+','+rand;
        }
    }
    return colorcode;
}


function jjj(){
    boxrandom();
        wholeprocess();
    
}

function wholeprocess(){
    colorcode=randomcolorcode();
   // document.addEventListener('DOMContentLoaded', () => {
        let _ques=document.getElementById('code');
        let originalcode=colorcode;
        let prefix = "Color Code";
        _ques.innerHTML=(prefix+ originalcode);
        boxrandom();
     // });}
}
    
function boxrandom(){
        
        var boxrandom=randomnumber(1,6);
        final=boxrandom;
        let originalcode=colorcode;
        
        for(let i=1;i<7;i++){
            if(i==boxrandom){
                let randombox=document.getElementById("div"+boxrandom);
                randombox.style.backgroundColor='rgb(' + originalcode + ')';
            }
            else{
               let randombox=document.getElementById("div"+i);
                let hh=randomcolorcode();
                
                randombox.style.backgroundColor='rgb(' +randomcolorcode()+ ')';
            }
       }
       let _ques = document.getElementById('code');
       let prefix = "COLOR CODE : ";
        _ques.innerHTML = prefix+originalcode;
       
    }



function checker(){
    document.addEventListener("DOMContentLoaded", function() {
        var divElements = document.querySelectorAll(".main-container div");
        divElements.forEach(function(divElement) {
            divElement.addEventListener("click", function() {
                 if(divElement.id==("div"+final)){
                     console.log("right");
                    incrementScore();
                    jjj();
                    }
                else{
                     console.log("wronmg");
                        jjj();
                    }
                    
                });
                
            });
            
        });
         
}

function incrementScore() {
    score++;
    let scoree=document.getElementById('scorecheck');
    scoree.innerHTML=('SCORE:'+ score);
    
  }

wholeprocess();
checker();