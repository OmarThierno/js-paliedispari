function isPalindrome(word) {
  let wordReversed = '';

  for (let i = word.length -1; i >= 0; i--) {
    wordReversed += word[i];
    console.log(word[i]);
  }

  if (word.toLowerCase() === wordReversed.toLowerCase()) {
    console.log('sono uguali')
    return true;
  } else {
    console.log('Non sono uguali')
    return false;
  }
}


