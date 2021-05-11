const { fabric } = require("./fabric");

var canvas = new fabric.canvas("myCanvas");
var player_X = 10;
var player_Y = 10;
var playerObj = "";
var blockImgObj = "";
var blockWidth = 30;
var blockHeight = 30;

function plr_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObj = Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(playerObj);
    })
}

function newImg(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObj = Img;
        blockImgObj.scaleToWidth(blockWidth);
        blockImgObj.scaleToHeight(blockHeight);
        blockImgObj.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(blockImgObj);
    })
}