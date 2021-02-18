import Game from "./game.js";
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView(document.getElementById("app"));


gameView.onTileClick = function (i) {
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    console.log("fhjfhdjf")
   
};

gameView.update(game);