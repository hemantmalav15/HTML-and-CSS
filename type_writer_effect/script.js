let dynamicText = document.getElementById('dynamic-text');
let arr = ['Front-end developer...', 'Software Engineer...', 'Mentor...'];
let letterIdx = 0;
let phraseIdx = 0;

// console.log(dynamicText);
function printLetter(phrase){
    if(letterIdx == phrase.length){
        clearInterval();
    }
    else if(letterIdx < phrase.length){
        dynamicText.textContent += phrase.charAt(letterIdx);
        console.log(dynamicText.textContent)
        letterIdx += 1;
        setTimeout(function(){
            printLetter(phrase);
        }, 100);
    }
}
function clearInterval(){
    if(letterIdx == -1){
        phraseIdx = (phraseIdx + 1) % arr.length;
        letterIdx = 0;
        printLetter(arr[phraseIdx]);
    }
    else if(letterIdx > -1){
        let updatedPhrase = "";
        for (let index = 0; index < letterIdx; index++) {
            updatedPhrase += arr[phraseIdx].charAt(index);
        }
        dynamicText.textContent = updatedPhrase;
        // console.log(updatedPhrase);
        letterIdx -= 1;
        setTimeout(function(){
            clearInterval()
        }, 100);
    }
}
printLetter(arr[phraseIdx]);
