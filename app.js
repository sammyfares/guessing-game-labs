const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        this.secretNum
        do {
            
            this.prevGuesses.push(this.getGuess())

        } while ((this.prevGuesses.length - 1) !== this.secretNum )

    },

 getGuess: function() {
    let guess

    while(this.guess !== this.secretNum) {
        guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`))
        

    }
    
 },

    render: function () {
        console.log(getGuess)
        if(this.getGuess() === this.secretNum){
            alert(`Congrats! You guessed the number in ${this.prevGuesses} guesses!`)
        } else if(this.getGuess() !== this.secretNum && this.getGuess() < this.secretNum){
            alert(`message to high try again ${this.prevGuesses}`)
        } else if(this.getGuess() !== this.secretNum && this.getGuess > this.secretNum){
            alert(`number is too low ${this.prevGuesses}`)
        }
        
    },
  
    
  }
  game.play()