var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

var player_object=" ";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
     top:player_y,
     left:player_x
    });
    canvas.add(player_object);
    });
}

var block_object = " ";


function new_img(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
    block_object = Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
     top:player_y,
     left:player_x
    });
    canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift are pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if(e.shiftKey && keyPressed == '77'){
        console.log("m and shift are pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");   
    }

    if(keyPressed == '87')
    {
        new_img('wall.jpg');
        console.log("w");
    }

    if(keyPressed == '71')
    {
        new_img('ground.png');
        console.log("g");
    }

    if(keyPressed == '76')
    {
        new_img('light_green.png');
        console.log("l");
    }

    if(keyPressed == '84')
    {
        new_img('trunk.jpg');
        console.log("t");
    }

    if(keyPressed == '82')
    {
        new_img('roof.jpg');
        console.log("r");
    }

    if(keyPressed == '89')
    {
        new_img('yellow_wall.png');
        console.log("y");
    }

    if(keyPressed == '68')
    {
        new_img('dark_green.png');
        console.log("d");
    }

    if(keyPressed == '85')
    {
        new_img('unique.png');
        console.log("u");
    }

    if(keyPressed == '67')
    {
        new_img('cloud.jpg');
        console.log("c");
    }
    
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        console.log("block image height = " + block_height);
        console.log("When up arrow is pressed, X = "+ player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_height;
        console.log("block image height = " + block_height);
        console.log("When down arrow is pressed, X = "+ player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x > 0){
        player_x = player_x - block_width;
        console.log("block image width = " + block_width);
        console.log("When left arrow is pressed, X = "+ player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_width;
        console.log("block image width = " + block_width);
        console.log("When down arrow is pressed, X = "+ player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}