//Accordian - reference: https://codepen.io/nera-iba/pen/VwRmvpz

document.querySelectorAll('.accordion-item h3').forEach((accordionToggle) => { 
    accordionToggle.addEventListener('click', () => { 
    const accordionItem = accordionToggle.parentNode; 
    const accordionContent = accordionToggle.nextElementSibling; 
  
     if (accordionContent.style.maxHeight) { 
         accordionContent.style.maxHeight = null; 
         accordionItem.classList.remove('active'); 
        } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
              accordionItem.classList.add('active'); 
          }
      });
  });


  /*Hacking test*/

    let inputfelt = document.getElementById('tbuser');
    const btn = document.getElementById('btn');
    let result = document.getElementById('result');

    function test() {
        if(inputfelt.toString().length > 4){
            result.innerHTML = "Det tager en hacker 4 år at hacke dit password";
        }else if(inputfelt.toString().length < 4){
            result.innerHTML = "Det tager en hacker 0 år at hacke dit password";
        }else{
            result.innerHTML = "Indtast bogstaver, tal og symboler";
            inputfelt.reset();
        }
        
    }

    btn.addEventListener('click', test);


    /* Branching scenario*/

  


    