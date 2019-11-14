
class Wordscreen {

//Setting up my constructor for my start screen
  constructor (gameBegin,gameOver){
    this.gameBegin = gameBegin;
    this.gameOver = gameOver;
   }

   display(){
        if (this.gameBegin == true){
          textSize(30);
          text('In a world where zombies attack you must click to start',100,100);
          fill(0, 0, 255);
        } else {

        }

        if (this.gameOver == true){

        }
      }

}
