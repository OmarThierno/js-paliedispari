const formElem = document.getElementById('form-input') // object
const evenOddElem = document.getElementById('even-odd'); // object 
const userNumElem = document.getElementById('number'); // object 


formElem.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e);

  const evenOdd = evenOddElem.value;
  const userNum = parseInt(userNumElem.value);
  
  if (userNum < 6 && userNum > 0 && evenOdd.toLowerCase() === 'even' || evenOdd.toLowerCase() === 'odd') {

    const sum = userNum + numRandom();
    console.log(sum);

    if (isEven(sum) && evenOdd.toLowerCase() === 'even' || !isEven(sum) && evenOdd.toLowerCase() === 'odd') {
      console.log ('Hai indovidato');
    } else {
      console.log ('Non hai indovidato');
    }

    evenOddElem.value = '';
    userNumElem.value = '';
  } else {
      alert('Devi inserire o Even o Odd e un numero tra 1 e 5');
    }
    
})
