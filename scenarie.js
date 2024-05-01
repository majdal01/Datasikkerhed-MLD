
/*Seperat js fil til scenarie (indeholder også accordion nu, fordi den også stoppede med at virke), da noget af det andet js kode går ind og ændrer i branching scenariet*/

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

//Menu
//Reference: https://www.tutorialspoint.com/how-to-create-a-clickable-dropdown-menu-with-css-and-javascript

function minMenu() {
    document.getElementById("myDropDown").classList.toggle("show"); 
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
       let dropdowns = document.getElementsByClassName('dropdown-indhold');
       let i;
       for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
             openDropdown.classList.remove('show');
          }
       }
    }
  }


/* Branching scenario*/

 //Reference: https://www.youtube.com/watch?v=R1S_NhKkvGA

 const textElement = document.getElementById('text');
 const optionButtonsElement = document.getElementById('option-buttons');
 const imgMenneske = document.getElementById('billede1');
 const imgHund = document.getElementById('billede2');
 const imgTante = document.getElementById('billede3');
 const imgHacker = document.getElementById('billede4');
 const imgTrekant = document.getElementById('trekant');
 const baggrundBox = document.getElementById('start-box');

 function startScenarie() {
   showTextNode(1);
 }

 function showTextNode(textNodeIndex) {
   const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
   textElement.innerText = textNode.text;
   imgMenneske.src = textNode.img;
   imgHund.src = textNode.img2;
   imgTante.src = textNode.img3;
   imgHacker.src = textNode.img4;
   imgTrekant.src = textNode.img5;
   baggrundBox.style.backgroundColor = textNode.bgColor;

   showImage(textNode);

   while (optionButtonsElement.firstChild){
   optionButtonsElement.removeChild(optionButtonsElement.firstChild);
 }
  

 function showImage(textNode){
   if(imgMenneske.getAttribute('src')  === textNode.img){
     imgMenneske.style.display = 'block';
   } else {
     imgMenneske.style.display = 'none';
   }
 
   if(imgHund.getAttribute('src')  === textNode.img2){
     imgHund.style.display = 'block';
   } else {
     imgHund.style.display = 'none';
   }

  if(imgTante.getAttribute('src')  === textNode.img3){
   imgTante.style.display = 'block';
 }else{
   imgTante.style.display = 'none';
 }

 if(imgHacker.getAttribute('src')  === textNode.img4){
   imgHacker.style.display = 'block';  
 }else{
   imgHacker.style.display = 'none'; 
   }
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
   if (nextTextNodeId === 100) {
    window.location.href = 'scenario-faerdig.html';
    return;
  }
   showTextNode(nextTextNodeId);
 }


 const textNodes = [
   {
       id: 1, 
       text: 'Det er weekend og du har endelig tid til at sidde med din bærbare. Du skal både have fulgt op på din indbakke, finde forårstøj til børnene og meldt dig til sommerens hundeshow med Tulle. \r\n\r\n Du starter med indbakken og opdager en mail, der ikke er til dig. Mailen ser mistænkelig ud og du får derfor lidt uro i hovedet. Du vælger at ringe til din tante, som er IT-ekspert og forklarer hende situationen. \r\n\r\n Hvad råder tanten dig til?',
       img: 'IMG/pige1.png',
       img2: 'IMG/hund1.png',
       img3: 'IMG/tante1.png',
       img5: 'IMG/trekantgron.png',
       bgColor: '#8AD0BF',

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
       text: 'Du går ind på www.haveibeenpwned.com og indtaster din mailadresse. \r\n\r\n Resultatet dukker op: "Oh no - pwned!" Så ja - dit password til din mailkonto er kompromitteret! \r\n\r\n Du må hellere skifte password med det samme. \r\n\r\n Hvad gør du?',
       img: 'IMG/pige2.png',
       img2: 'IMG/hund2.png',
       img5: 'IMG/trekantgron.png',
       bgColor: '#8AD0BF',
      
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
     text: 'Du skynder dig at blokere afsenderen og slette mailen. Puha! Du er både lettet og rystet på samme tid. Lettet over at have opdaget det så hurtigt, men rystet over at der har været "hul" igennem til din private indbakke. \r\n\r\n Nu er det vist tid til at skifte password til din indbakke. \r\n\r\n Hvad gør du?',
     img: 'IMG/pige3.png',
     img2: 'IMG/hund3a.png',
     img3: 'IMG/hund3aniboble.gif',
     img5: 'IMG/trekantgron.png',
     bgColor: '#8AD0BF',

     options: [
           {
             text: 'Genbruger et af dine passwords. Du har så mange logins, at det er svært at huske passwords, hvis de er forskellige.',
             nextText: 22
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
   text: 'Du vælger et lave et helt nyt password, nu hvor du ved, at alle logins skal være unikke. Hmmm... men det er ikke helt nemt at finde på noget nyt. Tulle ser heller ikke ud til at have et godt forslag. \r\n\r\n Hvad skal du finde på? ',
   img: 'IMG/pige4.png',
   img2: 'IMG/hund4.png',
   img5: 'IMG/trekantgron.png',
   bgColor: '#8AD0BF',

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
 text: 'Du er ret tilfreds med dig selv. IWeekendenSpiserViNutella er et langt password med store og små bogstaver. Det dur! \r\n\r\n Du skriver dit password ned i din fysiske notesbog. \r\n\r\n Nu er det tid til at kigge på børnetøj. Du finder en spændende webshop som giver rabat, hvis man er har købt flere gange og er blevet premium medlem. Du ved, at din veninde er premium medlem. \r\n\r\n Hvad gør du?',
 img: 'IMG/pige5.png',
 img2: 'IMG/hund5.png',
 img5: 'IMG/trekantgron.png',
 bgColor: '#8AD0BF',

 options: [
       {
         text: 'Ringer til din veninde, som sender hendes login til webshoppen til dig via mail. ',
         nextText: 51
     },
     {
         text: 'Opretter din egen profil med et nyt password.',
         nextText: 61
     }
 ]
},
{
 id: 6, 
 text: 'Puha - det blev et langt og kompliceret password! Men virkelig godt. Det vil nok tage omkring 20 millioner år at hacke. Nu føler du dig tryg og sikker i handlen på webshoppen. \r\n\r\n Hmm.. men adgangskoden skal også gemmes et sted. \r\n\r\n Hvad gør du?',
 img: 'IMG/pige6.png',
 img2: 'IMG/hund6.png',
 img5: 'IMG/trekantgron.png',
 bgColor: '#8AD0BF',

 options: [
       {
         text: 'Du har en fysisk notesbog på kontoret, hvor du skriver dine password ind.',
         nextText: 62
     },
     {
         text: 'Du ringer igen til din tante, for at få et godt råd.',
         nextText: 7
     }
 ]
},
{
 id: 7, 
 text: 'Din tante hjælper meget gerne. \r\n\r\n Hun råder dig til at finde en password manager. Mens tanten er med på mobilen, finder du frem til den rigtige password manager for dig. Du installerer løsningen på både din bærbare og din mobil, så du altid har dine passwords med dig. Du gemmer dit nye password i din nye password manager og vil du fremover bruge løsningen både til at foreslå sikre passwords til nye logins og når du skal skifte passwords. \r\n\r\n Du takker tanten, lukker computeren og går en tur med Tulle. Alt er godt!',
 img: 'IMG/pige7.png',
 img2: 'IMG/hund7.png',
 img3: 'IMG/tante2.png',
 img5: 'IMG/trekantgron.png',
 bgColor: '#8AD0BF',

 options: [
       {
         text: 'Perfekt! Jeg er klar til at bruge sikre passwords!',
         nextText: 100
     }
 ]
},
{
 id: 11, 
 text: 'Du skriver tilbage til personen, at du gerne vil gøre vedkommende opmærksom på, at de har sendt deres email forkert. \r\n\r\n Næste dag ligger der endnu flere underlige mails i din indbakke og i din netbank ligger en besked om, at de har spærret din konto, fordi der er en mistænkelig aktivitet.\r\n\r\n Selvom du er en høflig og ordentlig person, så er reglen aldrig at svare på en mistænkelig mail. En svarmail bekræfter overfor hackeren, at din mail er aktiv, og den bliver dermed spændende at kigge ind i.',
 img4: 'IMG/hacker-scenario.png',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',
 
 options: [
       {
         text: 'Gå tilbage og prøv igen!',
         nextText: -1
     }
 ]
},
{
 id: 21, 
 text: 'Du genbruger et password, som du har anvendt til nye logins de sidste par år. Det er dejligt nemt at huske i en travl hverdag. \r\n\r\n 2 måneder senere oplever du mistænkelig aktivitet på din profil til bliver dit password til ét af dine login med samme password hacket. \r\n\r\n ! Med samme password til flere logins, skal en hacker kun gætte ét password. Det er nu nemt for hackeren at få adgang til alle dine logins med samme password. \r\n\r\n Det er desværre ikke en sikker løsning.',
 img4: 'IMG/hacker-scenario.png',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',

 options: [
       {
         text: 'Gå tilbage og foretag et andet valg!',
         nextText: 2
     }
 ]
},
{
  id: 22, 
  text: 'Du genbruger et password, som du har anvendt til nye logins de sidste par år. Det er dejligt nemt at huske i en travl hverdag. \r\n\r\n 2 måneder senere oplever du mistænkelig aktivitet på din profil til bliver dit password til ét af dine login med samme password hacket. \r\n\r\n ! Med samme password til flere logins, skal en hacker kun gætte ét password. Det er nu nemt for hackeren at få adgang til alle dine logins med samme password. \r\n\r\n Det er desværre ikke en sikker løsning.',
  img4: 'IMG/hacker-scenario.png',
  img5: 'IMG/trekantgraa.png',
  bgColor: '#BFBEB8',
 
  options: [
        {
          text: 'Gå tilbage og prøv igen!',
          nextText: 3
      }
  ]
 },
{
 id: 31, 
 text: 'Du ændrer dit password til Tulle2024, lukker computeren og går en tur med hunden, for at ryste oplevelsen af dig. \r\n\r\n Ugen efter er der igen mistænkelig aktivitet i din indbakke. Og nu ligger der ikke kun én mail, men hele 3. Den ene mail er et krav om løsesum fra en hacker, som truer med at bruge din personlige oplysninger til svindel og bedrag.\r\n\r\n ! Det er desværre ikke nok at ændre det eksisterende password en smule. Hackeren har allerede fat i en del af dit password og der skal ikke meget til for at få fat i ændringen.',
 img4: 'IMG/hacker-scenario.png',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',

 options: [
       {
         text: 'Desværre! Start forfra og prøv igen!',
         nextText: -1
     }
 ]
},
{
 id: 41, 
 text: 'Dit password består nu af dit barns navn og fødselsåret på din mand. Det er nyt, det er en blanding af bogstaver og tal og du kan huske det. \r\n\r\n ! Desværre ved hackeren godt, at et password ofte sammensættes af kendte ord og tal. Navne og fødselsdage kan findes på online profiler, i mails, beskeder, dokumenter mv. Det vil være et oplagt sted at starte, hvis hackeren vil gætte dit password.',
 img4: 'IMG/hacker-scenario.png',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',

 options: [
       {
         text: 'Desværre. Gå tilbage og foretag et andet valg!',
         nextText: 4
     }
 ]
},
{
 id: 51, 
 text: 'Du bruger din venindes login og gemmer oplysningerne på din computers skrivebord, hvis du skal bruge det igen.\r\n\r\n Et par uger efter købet kan du ikke længere logge ind på din computer. En hacker har fået adgang og har skiftet adgangskode. Få dage efter oplever din veninde at modtage mærkelige mails i hendes indbakke.\r\n\r\n ! Det er ikke kun logins til websteder eller mail, du skal passe på. Adgangskoder til dit netværk og din computer er i lige så stor fare for at blive hacket. Får en hacker adgang til din computer, er der frit spil.',
 img4: 'IMG/hacker-scenario.png',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',

 options: [
       {
         text: 'Desværre. Gå tilbage og prøv igen!',
         nextText: 5
     }
 ]
},
{
 id: 61, 
 text: 'Du opretter din egen profil med et nyt kodeord - et tilsvarende langt og lækkert ét af slagsen. Du skriver dit login ind i din notesbog, som du har med dig overalt og afslutter køb af børnetøj. Nu skal hunden luftes. \r\n\r\n I ugen efter kan du ikke slippe tanken om de søde pusser, man kan købe i webshoppen. Du beslutter dig for at logge på og foretage et køb mere. \r\n\r\n Men hov! Hvor er din notesbog? \r\n\r\n ! En notesbog er sårbar over for tab, tyveri eller uautoriseret adgang. Den er svær at sikre sammenlignet med digitale værktøjer til passwordhåndtering, som ofte tilbyder avancerede sikkerhedsfunktioner som kryptering og to-faktor-autentificering.',
 img4: 'IMG/hacker-scenario.png',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',

 options: [
       {
         text: 'Desværre. Start forfra og foretag andre valg!',
         nextText: -1
     }
 ]
},
{
 id: 62, 
 text: 'Du skriver kodeordet ind i din notesbog, som du har med dig overalt og afslutter køb af børnetøj. Nu skal hunden luftes. \r\n\r\n I ugen der følger kan du ikke slippe tanken om de søde pusser, man kan købe i webshoppen, så du beslutter dig for at logge på og foretage et køb mere. \r\n\r\n Men hov! Hvor er din notesbog? \r\n\r\n ! En notesbog er sårbar over for tab, tyveri eller uautoriseret adgang. Den er svær at sikre sammenlignet med digitale værktøjer til passwordhåndtering, som ofte tilbyder avancerede sikkerhedsfunktioner som kryptering og to-faktor-autentificering.',
 img5: 'IMG/trekantgraa.png',
 bgColor: '#BFBEB8',

 options: [
       {
         text: 'Desværre. Gå tilbage og foretag et andet valg!',
         nextText: 6
     }
 ]
}
 ];

 startScenarie();
