const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        console.log(this.secretNum)
        do {
            
            this.prevGuesses.push(this.getGuess())
            this.render()
            

        } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum )
        console.log(prevGuesses)
        
    },


    // we created a method 
    //we are looping while guess is smaller than biggestNum 
    // and while guess is bigger than smallest number 
    // if true excute the whats inside the do
 getGuess: function() {
    let guess
    do {

        guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`))

    } while(guess > this.biggestNum || guess < this.smallestNum || isNaN(guess) || guess === undefined) {
        
        

    }
        return guess
        
 },
    


    

    //if guess equal to secretNum show alert
    // if its not equal and get guess is smaller than secret number alert try higher
    // if not equal and getGuess is greater than secretNum alert number too low
    render: function () {
        const guessNum = this.prevGuesses[this.prevGuesses.length - 1]
        if(guessNum === this.secretNum){
            alert(`Congrats! You guessed the number in ${this.prevGuesses.join(',')} guesses!`)
        } else if(guessNum !== this.secretNum && guessNum > this.secretNum){
            alert(`message to high try again ${this.prevGuesses.join(',')}`)
        } else if(guessNum !== this.secretNum && guessNum < this.secretNum){
            alert(`number is too low ${this.prevGuesses.join(',')}`)
        }
        
    },
  
    
  }

  game.play()
  