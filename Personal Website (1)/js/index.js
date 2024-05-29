var height = window.innerHeight;
var width = window.innerWidth;
var latimeProf;
var ceVreau;
var dop;
var repeater;
let v=0;


function doWork() {
        latimeProf =document.getElementById("DIVimagineProf").offsetWidth;
        document.getElementById("DIVimagineProf").style.height=latimeProf+"px";
        ceVreau=(((height-latimeProf)/2)/height*100);
        document.getElementById("DIVimagineProf").style.top=ceVreau+"%";
     repeater = setTimeout(doWork, 1);
    }
    
    doWork();


document.getElementById("imagineFund").style.height=height+"px";


function openNav() {
    document.getElementById("dp").style.transition = "1s";
    document.getElementById("dp").style.width = "100%";
    document.getElementById("dp").style.backgroundColor="rgba(0,0,0,.6)";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    dop = document.getElementById("dp");
    document.body.style.overflow = "hidden";
  }
function openLb(){
  if(v==0){
    document.getElementById("dm").style.transition="1s";
    document.getElementById("dm").style.width="100%";
    document.getElementById("sgt").style.transition="1s";
    document.getElementById("sgt").style.transform="rotateY(180deg)";
    v=1;
  }
  else{
    document.getElementById("dm").style.transition="1s";
    document.getElementById("dm").style.width="10%";
    document.getElementById("sgt").style.transform="rotateY(0deg)";
    v=0;
  }
 
};
function openDp(aa){
  document.getElementById("diploma").style.transition="0.45s";
  document.getElementById("diploma").style.width="100%";
  document.getElementById("diploma").style.height="100%";
  document.getElementById("diploma").style.top="0";
  document.getElementById("diploma").style.left="0";
  document.getElementById("diploma").style.backgroundColor="rgba(0, 0, 0, 0.5)";
  document.getElementById("diploma").innerHTML='<img src="'+aa+'";>';
};


