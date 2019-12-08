
class Wordscreen {

//Setting up my constructor for my start screen
  constructor (gameBegin,gameOver){
    this.gameBegin = gameBegin;
    this.gameOver = gameOver;
   }

   display(){
        if (this.gameBegin == true){
          fill(255, 0, 0);
          textSize(30);
          text('In a world where zombies attack you must click to start',100,40);

        } else {

        }

        if (this.gameOver == true){
          //Somekind of kind of game over text
        }
      }

}
