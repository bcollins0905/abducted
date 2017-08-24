
var words = ['centaurus', 'martian', 'abduction', 'specimen', 'crop circles', 'little green men', 'beam me up scotty'];

// This function will pick our word
var randWord = words[Math.floor(Math.random() * words.length)];
// This gives us the blanks

// I'd suggest adding console.logs all over the place so you can verify your assumptions by checking the console
// It's also a nice way to see intermediate process when nothing's appearing on the screen quite yet
console.log('randWord: ', randWord)

var answerArray = [];
for (var i = 0; i < randWord.length; i++) {
 answerArray[i] = "_";
}
<<<<<<< HEAD
document.write (answerArray)
=======

// By passing in `answerArray` to getElementById here, you are telling
// the browser to try and find an element in your html with an id of `answerArray`
// while you have an answerArray variable in this script, you don't have
// an element with that id in your index.html
var answerArrayElement = document.getElementById('answerArray')
console.log('answerArrayElement: ', answerArrayElement)

// I added a div with a gameboard id, so this call to getElementById
// will return that element. Open this up in the console to see what I'm talking about!
var gameboardElement = document.getElementById('gameboard')
console.log('gameboardElement: ', gameboardElement)


>>>>>>> 1da86ddca92c72fa465f4c0a90af760b5dd46430
// This determines how many tries user gets 
var wrongGuess = [];
for (var j = 0; j < wrongGuess.length; j++ > 9){
    
}



