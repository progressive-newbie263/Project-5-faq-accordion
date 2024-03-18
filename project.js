function displayAnswer(answerState, buttonState) {
  const buttonElement = document.querySelector(`.${buttonState}`);
  const answerElement = document.querySelector(`.${answerState}`);
  
  if (buttonElement.src.includes('plus')){
    //button on state
    buttonElement.src = 'assets/images/icon-minus.svg';
    //paragraph off state
    answerElement.style.fontSize = "0px"; //shrink this to none
  } 
  else {
    //button off state
    buttonElement.src = 'assets/images/icon-plus.svg';
    //paragraph on state
    answerElement.style.fontSize = "16px"
  }
}