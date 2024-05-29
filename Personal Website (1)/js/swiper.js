let j=0;
while(j<totCeFac.length)
{
  let swiperSlide=document.createElement("div");
  swiperSlide.className="swiper-slide"; swiperSlide.id="swiper-slide";

    let container=document.createElement("div");
    container.className="container"; container.id=j ;

      let front=document.createElement("div");
      front.className="front"; front.id="front";

        let ceSiCat=document.createElement("div");
        ceSiCat.className="ceSiCat"; ceSiCat.id="ceSiCat";

          let ce=document.createElement("div");
          ce.className="ce"; ce.id="ce";
          if(totCeFac[j].name[0]>="a" && totCeFac[j].name[0]<="z")
          {
            let qqqq=totCeFac[j].name[0].toUpperCase();
            totCeFac[j].name=qqqq+totCeFac[j].name.slice(1);
          }
          ce.innerHTML=totCeFac[j].name;

          let cat=document.createElement("div");
          cat.className="cat"; cat.id="cat";

            let baraAia=document.createElement("div");
            baraAia.className="baraAia"; baraAia.id="baraAia";
            let culoare="";
            let answer="";
            switch(totCeFac[j].lv){
              case 1: answer="Începător";culoare="rgb(255, 22, 22)";break;
              case 2: answer="Intermediar";culoare="rgb(255, 162, 0)";break;
              case 3: answer="Abil";culoare="rgb(255, 234, 0)";break;
              case 4: answer="Experimentat";culoare="rgb(191, 255, 0)";break;
              case 5: answer="Expert";culoare="rgb(17, 255, 0)";break;
            }
            
            let langaBaraAia=document.createElement("div");
            langaBaraAia.className="langaBaraAia"; langaBaraAia.id="langaBaraAia";

            langaBaraAia.innerHTML=answer;
            baraAia.style.backgroundColor=culoare;
            baraAia.style.height=20*totCeFac[j].lv+"%";
            
            cat.appendChild(baraAia);
            cat.appendChild(langaBaraAia);
          
          ceSiCat.appendChild(ce);
          ceSiCat.appendChild(cat);
        
        let ex=document.createElement("div"); let aux=j+0.1;
        ex.className="ex"; ex.id=aux;
        ex.innerHTML='<button class="flip" id="flip" onclick="flip('+j+')"><ion-icon name="ellipsis-vertical"></ion-icon></button>';

        front.appendChild(ceSiCat);
        front.appendChild(ex);

        let back=document.createElement("div");
        back.className="back"; back.id="back";

            let ex2=document.createElement("div");
            ex2.className="ex2"; ex2.id="ex2";
            ex2.innerHTML='<button class="flip" id="flip" onclick="backflip('+j+')"><ion-icon name="ellipsis-vertical"></ion-icon></button>';
            
            let lsi=document.createElement("div");
            lsi.className="lsi"; lsi.id="lsi";
            lsi.innerHTML='<button id="linkk" onclick="openModul2('+j+')">Linkuri</button><button id="imgg" onclick="openModule1('+j+')">Imagini</button>';
            
            back.appendChild(ex2);
            back.appendChild(lsi);

        container.appendChild(front);
        container.appendChild(back);

    swiperSlide.appendChild(container);

  document.getElementById("swiper-wrapper").appendChild(swiperSlide);
  j++;
}

function backflip(n){
  document.getElementById(n).style.transition="1s";
  document.getElementById(n).style.transform="rotateY(0deg)";
  setTimeout(function() {
    let aux=n+0.1;
    document.getElementById(aux).style.display="flex";
  }, 300);
  
}
function flip(n){
  document.getElementById(n).style.transition="1s";
  document.getElementById(n).style.transform="rotateY(180deg)";
  setTimeout(function() {
    let aux=n+0.1;
    document.getElementById(aux).style.display="none";
  }, 500);
  
};



