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

    const inputfelt = document.getElementById('tbuser');
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

  let textElement = document.getElementById('text');
  const optionButtonsElement = document.getElementById('option-buttons');

  let state = {};

  function startScenario() {
    state = {};
    showTextNode(1);
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild){
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }


   textNode.options.forEach(option => {
    if (showOption(option)) {
    const button = document.createElement('button');
    button.innerText = option.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectOption(option));
    optionButtonsElement.appendChild(button);
    }
  })
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
  }

  function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
      return startScenario();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
  }

  const textNodes = [
    {
        id: 1, 
        text: 'Det er weekend og du har endelig tid til at sidde med din bærbare. Du skal både have fulgt op på din indbakke, finde forårstøj til børnene og meldt dig til sommerens hundeshow.',
        /*text: 'Du starter med indbakken og opdager en mail, der ikke er til dig. Mailen ser mistænkelig ud og du får derfor lidt uro i hovedet. Du vælger at ringe til din tante, som er IT-ekspert og forklarer hende situationen ',
        text: 'Hvad råder tanten dig til?',*/

        options: [
            {
                text: 'Gå ind på hjemmesiden www.haveibeenpwned.com for at tjekke, om dit password er blevet hacket.',
                setState: { blueGoo: true },
                nextText: 2
             },
             {
                text: 'Skriv tilbage til personen der har sendt mailen for at afklare situationen.',
                nextText: 2
             },
             {
                text: 'Bloker afsenderen, slet mailen og skift password til mailkontoen med det samme.',
                nextText: 2
             }
        ]
    }, 
    {
        id: 2, 
        Text: 'fffg',

        options: [
            {
                text: 'test'
            }
        ]
    }
  ];

  startScenario();

    