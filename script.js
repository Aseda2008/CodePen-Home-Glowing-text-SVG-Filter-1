document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const textDisplay = document.getElementById('textDisplay');
    let currentText = ''; 
  
    textInput.addEventListener('input', () => {
      const newText = textInput.value;
  // длвоырлдо
      let i = 0;
      while (
        i < currentText.length &&
        i < newText.length &&
        currentText[i] === newText[i]
      ) {
        i++;
      }
  
      while (textDisplay.children.length > i) {
        textDisplay.removeChild(textDisplay.lastChild);
      }
  
      for (let j = i; j < newText.length; j++) {
        const span = document.createElement('span');
        span.className = 'animated-text'; 
        span.textContent = newText[j] === ' ' ? '\u00A0' : newText[j]; 
        textDisplay.appendChild(span);
      }
  
      currentText = newText;
    });
  });