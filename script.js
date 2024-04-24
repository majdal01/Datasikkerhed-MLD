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