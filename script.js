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

    /*const inputfelt = document.getElementById('tbuser');
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

    btn.addEventListener('click', test);*/


 /* Branching scenario*/

  const textElement = document.getElementById('text');
  const optionButtonsElement = document.getElementById('option-buttons');
  const imgMenneske = document.getElementById('billede1');
  const imgHund = document.getElementById('billede2');
  const imgTante = document.getElementById('billede3');


  function startScenarie() {
    showTextNode(1);
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    imgMenneske.src = textNode.img;
    imgHund.src = textNode.img2;
    imgTante.src = textNode.img3;
    /*function toggleObject(img3){
      if(textNodes.includes('img3')){
        img3.style.display = 'block';
      }else{
        img3.style.display = 'none';
      }
    }*/
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
  });
  }

  function showOption(option) {
    return true;
  }

  function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
      return startScenarie();
    }
    showTextNode(nextTextNodeId);
  }


  const textNodes = [
    {
        id: 1, 
        text: 'Det er weekend og du har endelig tid til at sidde med din bærbare. Du skal både have fulgt op på din indbakke, finde forårstøj til børnene og meldt dig til sommerens hundeshow. \r\n\r\n Du starter med indbakken og opdager en mail, der ikke er til dig. Mailen ser mistænkelig ud og du får derfor lidt uro i hovedet. Du vælger at ringe til din tante, som er IT-ekspert og forklarer hende situationen. \r\n\r\n Hvad råder tanten dig til?',
        img: 'IMG/pige1.png',
        img2: 'IMG/hund1.png',
        img3: 'IMG/tante1.png',

        options: [
            {
                text: 'Gå ind på hjemmesiden www.haveibeenpwned.com for at tjekke, om dit password er blevet hacket.',
                nextText: 2
             },
             {
                text: 'Skriv tilbage til personen der har sendt mailen for at afklare situationen.',
                nextText: 11
             },
             {
                text: 'Bloker afsenderen, slet mailen og skift password til mailkontoen med det samme.',
                nextText: 3
             }
        ]
    }, 
    {
        id: 2, 
        text: 'Du går ind på www.haveibeenpwned.com og finder ud af, at ja - dit password til din mailkonto er kompromitteret! \r\n\r\n Din tante beder dig skifte password med det samme. \r\n\r\n Hvad gør du?',
        img: 'IMG/pige2.png',
        img2: 'IMG/hund2.png',
       
        options: [
              {
                text: 'Genbruger et af dine passwords. Du har så mange logins, at det er svært at huske passwords, hvis de er forskellige.',
                nextText: 21
            },
            {
                text: 'Du laver et helt nyt password, du aldrig har brugt før.',
                nextText: 4
            },
            {
                text: 'Du tager et af dine kendte passwords “Tulle2019” og ændrer det til “Tulle2024”',
                nextText: 31
            }
        ]
    },
    {
      id: 3, 
      text: 'Du skynder dig at blokere afsenderen, slette mailen og så er det vist tid til at skifte password til din indbakke. \r\n\r\n Hvad gør du?',
      img: 'IMG/pige3.png',
      img2: 'IMG/hund3.png',

      options: [
            {
              text: 'Genbruger et af dine passwords. Du har så mange logins, at det er svært at huske passwords, hvis de er forskellige.',
              nextText: 21
          },
          {
              text: 'Du laver et helt nyt password, du aldrig har brugt før.',
              nextText: 4
          },
          {
              text: 'Du tager et af dine kendte passwords “Tulle2019” og ændrer det til “Tulle2024”',
              nextText: 31
          }
      ]
  },
  {
    id: 4, 
    text: 'Du vælger et lave et helt nyt password, nu hvor du ved, at alle logins skal være unikke. \r\n\r\n Hmmm..men hvad skal du finde på? ',
    img: 'IMG/pige4.png',
    img2: 'IMG/hund4.png',

    options: [
          {
            text: 'Det skal stadig være nemt at huske. Så du bruger navnet på din førstefødte og tilføjer din mands fødselsdato',
            nextText: 41
        },
        {
            text: 'Du laver en sætning, du kan huske: IWeekendenSpiserViNutella',
            nextText: 5
        },
        {
            text: 'Du vælger at lave et langt password på 16 karakterer, hvor du både har store og små bogstaver, tegn og symboler.',
            nextText: 6
        }
    ]
},
{
  id: 5, 
  text: 'Du er ret tilfreds med dig selv. IWeekendenSpiserViNutella er et langt password med store og små bogstaver. Det dur! \r\n\r\n Du skriver passwordet ned i din fysiske notesbog og nu er det tid til at kigge på børnetøj. Du finder en spændende webshop som giver rabat hvis man er har købt flere gange og er blevet premium medlem. Du ved, at din veninde er premium medlem. \r\n\r\n Hvad gør du?',
  img: 'IMG/pige5.png',
  img2: 'IMG/hund5.png',

  options: [
        {
          text: 'Ringer til din veninde som sender hendes login til webshoppen til dig via mail. ',
          nextText: 51
      },
      {
          text: 'Opretter din egen profil med et nyt password.',
          nextText: 61
      },
      {
          text: 'Desværre! Start forfra og prøv andre valg',
          nextText: -1
      }
  ]
},
{
  id: 6, 
  text: 'Puha - det blev et langt og kompliceret password! Nu føler du dig tryg og sikker i handlen på webshoppen. \r\n\r\n Men adgangskoden skal også gemmes et sted. \r\n\r\n Hvad gør du?',
  img: 'IMG/pige6.png',
  img2: 'IMG/hund6.png',

  options: [
        {
          text: 'Du har en fysisk notesbog på kontoret, hvor du skriver dine password ind.',
          nextText: 4
      },
      {
          text: 'Du ringer igen til din tante, for at få et godt råd.',
          nextText: 7
      }
  ]
},
{
  id: 7, 
  text: 'Din tante hjælper meget gerne. \r\n\r\n Hun råder dig til at finde en password manager. Mens tanten er med på mobilen, finder du frem til den rigtige password manager for dig. Du installerer løsningen på både din bærbare og din mobil, så du altid har dine passwords med dig. Du gemmer dit nye password i din nye password manager og vil du fremover bruge løsninge både til at foreslå sikre passwords til nye logins og når du skal skifte passwords. \r\n\r\n Du takker tanten, lukker computeren og går en tur med hunden. Alt er godt!',
  img: 'IMG/pige7.png',
  img2: 'IMG/hund7.png',

  options: [
        {
          text: 'Næste',
          nextText: 8
      }
  ]
},
{
  id: 8, 
  text: 'Tillykke!! Du har gennemført password læring, der gør dig klar til at tage sikre og trygge beslutninger omkring din dagligdag med logins.',
  

  options: [
        {
          text: 'Start forfra',
          nextText: -1
      }
  ]
},
{
  id: 11, 
  text: 'Du skriver tilbage til personen, at du gerne vil gøre vedkommende opmærksom på, at de har sendt deres email forkert. \r\n\r\n Næste dag ligger der endnu flere underlige mails i din indbakke og i din netbank ligger en besked om, at de har spærret din konto, fordi der er en mistænkelig aktivitet.\r\n\r\n Situation:\r\n\r\n Selvom du er en høflig og ordentlig person, så er reglen aldrig at svare på en mistænkelig mail. På den måde bekræfter du overfor hackeren, at din mail er aktiv, og den bliver dermed spændende at kigge ind i.',
  img: 'IMG/hacker11.png',

  options: [
        {
          text: 'Gå tilbage og prøv igen!',
          nextText: -1
      }
  ]
},
{
  id: 21, 
  text: 'Du genbruger det password, som du bruger til de fleste af dine logins. \r\n\r\n 2 måneder senere bliver dit password til ét af dine login med samme password hacket. Det er nu nemt for hackeren at få adgang til alle dine logins med samme password.',

  options: [
        {
          text: 'Gå tilbage og prøv igen!',
          nextText: 3
      }
  ]
},
{
  id: 31, 
  text: 'Du ændrer dit password til Tulle2024, lukker computeren og går en tur med hunden, for at ryste oplevelsen af dig. \r\n\r\n Ugen efter er der igen mistænkelig aktivitet i din indbakke. Og nu ligger der ikke kun én mail, men hele 3. Og den ene er et krav af løsesum fra en hacker, som truer med at bruge din personlige oplysninger til svindel og bedrag.\r\n\r\n Situation: \r\n\r\n Det er desværre ikke nok at ændre det eksisterende password en smule. Hackeren har allerede fat i en del af passwordet og der skal ikke meget til, for at få fat i ændringen.',

  options: [
        {
          text: 'Desværre! Start forfra og prøv igen!',
          nextText: -1
      }
  ]
},
{
  id: 41, 
  text: 'Dit password består nu af dit barns navn og fødselsåret på din mand. Begge dele fremgår i mails, på profiler, i beskeder og mange flere steder.\r\n\r\n Hackeren ved, at et password ofte sammensættes af kendte ord og tal, og derfor går der ikke lang tid, før din profil er hacket.',

  options: [
        {
          text: 'Desværre. Gå tilbage og prøv igen!',
          nextText: 4
      }
  ]
},
{
  id: 51, 
  text: 'Du bruger din venindes login og gemmer oplysningerne på din computers skrivebord, hvis du skal bruge det igen.\r\n\r\n Et par uger efter købet kan du ikke længere logge ind på din computer. En hacker har fået adgang og har skiftet adgangskode. Få dage efter oplever din veninde at modtage mærkelige mails i hendes indbakke.\r\n\r\n Situation: \r\n\r\n Det er ikke kun logins til websteder eller mail, du skal passe på. Adgangskoder til dit netværk og din computer, er i ligeså stor fare for at blive hacket. Får en hacker adgang til din computer, er der frit spil.',

  options: [
        {
          text: 'Desværre. Gå tilbage og prøv igen!',
          nextText: 5
      }
  ]
},
{
  id: 61, 
  text: 'Du opretter din egen profil med et nyt kodeord - et tilsvarende langt og lækkert ét af slagsen. Du skriver kodeordet ind i din notesbog, som du har med dig overalt og afslutter køb af børnetøj. Nu skal hunden luftes. \r\n\r\n I ugen der følger kan du ikke slippe tanken om de søde pusser, man kan købe i webshoppen, så du beslutter dig for at logge på og foretage et køb mere. \r\n\r\n Men hov! Hvor er din notesbog? \r\n\r\n Situation:\r\n\r\n At gemme sine adgangskoder i en fysisk notesbog kan virke som en praktisk løsning, især hvis man har svært ved at huske dem alle. Dog er der visse risici forbundet med dette.\r\n\r\n En notesbog er sårbar over for tab, tyveri eller uautoriseret adgang, hvilket kan resultere i uautoriseret adgang til ens konti og personlige oplysninger.Desuden er det vanskeligt at sikre en fysisk notesbog mod uautoriseret adgang sammenlignet med digitale adgangskodehåndteringsværktøjer, som ofte tilbyder avancerede sikkerhedsfunktioner som kryptering og to-faktor-autentificering.',

  options: [
        {
          text: 'Desværre. Gå tilbage og prøv igen!',
          nextText: -1
      }
  ]
},
{
  id: 61, 
  text: 'Du skriver kodeordet ind i din notesbog, som du har med dig overalt og afslutter køb af børnetøj. Nu skal hunden luftes. \r\n\r\n I ugen der følger kan du ikke slippe tanken om de søde pusser, man kan købe i webshoppen, så du beslutter dig for at logge på og foretage et køb mere. \r\n\r\n Men hov! Hvor er din notesbog? \r\n\r\n Situation:\r\n\r\n At gemme sine adgangskoder i en fysisk notesbog kan virke som en praktisk løsning, især hvis man har svært ved at huske dem alle. Dog er der visse risici forbundet med dette.\r\n\r\n En notesbog er sårbar over for tab, tyveri eller uautoriseret adgang, hvilket kan resultere i uautoriseret adgang til ens konti og personlige oplysninger.Desuden er det vanskeligt at sikre en fysisk notesbog mod uautoriseret adgang sammenlignet med digitale adgangskodehåndteringsværktøjer, som ofte tilbyder avancerede sikkerhedsfunktioner som kryptering og to-faktor-autentificering.',

  options: [
        {
          text: 'Desværre. Gå tilbage og prøv igen!',
          nextText: 6
      }
  ]
}
  ];

  startScenarie();
