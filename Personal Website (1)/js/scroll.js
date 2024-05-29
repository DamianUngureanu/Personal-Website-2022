const bt1 = document.getElementById('bt1');
bt1.addEventListener('click', () => window.scrollTo({
    top: height,
    behavior: 'smooth',
  }));
const bt2 = document.getElementById('bt2');
bt2.addEventListener('click', () => window.scrollTo({
    top: height*2,
    behavior: 'smooth',
  }));
const bt3 = document.getElementById('bt3');
bt3.addEventListener('click', () => window.scrollTo({
    top: height*3,
    behavior: 'smooth',
  }));


const scrollTop = document.getElementById('scrollTop');
scrollTop.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }));
const scrollTop2 = document.getElementById('logoJos');
scrollTop2.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }));


  var repeater2;

function doWork2() {
        if(window.pageYOffset>height-200)
        {
          document.getElementById("scrollTop").style.display = "block";
        }else{
          document.getElementById("scrollTop").style.display = "none";
        }

     repeater2 = setTimeout(doWork2, 1);
    }
    
    doWork2();