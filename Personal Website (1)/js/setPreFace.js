let jj;
let i=0;
var x=((latimeProf/2)/height*100)+6;
var n=x+2;
var y=n+10;

document.getElementById("cont1").style.height=height+"px";
document.getElementById("cont2").style.height=height+"px";
document.getElementById("cont3").style.height=height+"px";
document.getElementById("cont4").style.height=height+"px";

document.getElementById("midScris").style.marginLeft= x+"%";
document.getElementById("nume1").style.marginLeft = n+"%";
document.getElementById("nume2").style.marginLeft = y+"%";
document.getElementById("ceSunt").style.marginLeft = x+"%";

document.getElementById("nume1").innerHTML=NUME[0];
document.getElementById("nume2").innerHTML=NUME[1];
document.getElementById("descriere").innerHTML="\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+descriere;


while(i<ceFac.length){
    if(i<ceFac.length-1)
    {
        document.getElementById("ceSunt").innerHTML=document.getElementById("ceSunt").innerHTML+ceFac[i]+" &#8226; ";
        document.getElementById("ceSunt2").innerHTML=document.getElementById("ceSunt2").innerHTML+ceFac[i]+" &#8226; ";
    }
    else{
        document.getElementById("ceSunt").innerHTML=document.getElementById("ceSunt").innerHTML+ceFac[i];
        document.getElementById("ceSunt2").innerHTML=document.getElementById("ceSunt2").innerHTML+ceFac[i];}
    i++;
}
for(jj=0;jj<limbi.nume.length;jj++)
{
    let eg=document.createElement("div");
    eg.className="eg"; eg.id="eg";
        let catEg=document.createElement("div");
        catEg.className="catEg"; catEg.id="catEg";
        let pp=document.createElement("p");
        if(limbi.nume[jj][0]>="a" && limbi.nume[jj][0]<="z")
          {
            let qqqq=limbi.nume[jj][0].toUpperCase();
            limbi.nume[jj]=qqqq+limbi.nume[jj].slice(1);
          }
          pp.innerHTML=limbi.nume[jj];
          let culoaree="";
          switch(limbi.lv[jj]){
            case 1: culoaree="rgb(255, 22, 22)";break;
            case 2: culoaree="rgb(255, 162, 0)";break;
            case 3: culoaree="rgb(255, 234, 0)";break;
            case 4: culoaree="rgb(191, 255, 0)";break;
            case 5: culoaree="rgb(17, 255, 0)";break;
          }
          catEg.style.backgroundColor=culoaree;
          catEg.style.height=10*limbi.lv[jj]+"%";

        eg.appendChild(catEg);
        eg.appendChild(pp);
        
    document.getElementById("dmDIV").appendChild(eg);
};

for(jj=0;jj<trecut.length;jj++)
{
    let hDIV=document.createElement("ul");
    hDIV.className="hDIV"; hDIV.id="hDIV";

        let pp=document.createElement("p");
        switch(jj){
            case 0: pp.innerHTML="Am absolvit:"; break;
            case 1: pp.innerHTML="Am terminat:";break;
            case 2: pp.innerHTML="Am participat la:";break; 
        }
        let ii;
        hDIV.appendChild(pp);
        for(ii=0;ii<trecut[jj].nume.length;ii++)
        {
            let pp2=document.createElement("li");
            if(trecut[jj].nume[ii][0]>="a" && trecut[jj].nume[ii][0]<="z")
            {
                let qqqq=trecut[jj].nume[ii][0].toUpperCase();
                trecut[jj].nume[ii]=qqqq+trecut[jj].nume[ii].slice(1);
            }
            pp2.innerHTML=trecut[jj].nume[ii];
            let btt=document.createElement("button");
            btt.innerHTML="diplomă";
            btt.setAttribute('onclick','openDp("'+trecut[jj].diploma[ii]+'")');
            
            pp2.appendChild(btt);

            hDIV.appendChild(pp2);
        }
        

        
        

    document.getElementById("hDIV1").appendChild(hDIV);

};

document.getElementById("prooff").innerHTML=document.getElementById("prooff").innerHTML+proof;