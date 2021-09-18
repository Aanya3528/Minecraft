var canvas=new fabric.Canvas("myCanvas");

blockimg_width=30;
blockimg_height=30;

player_x=10;
player_y=10;

var player_object="";
var blockimg_object="";

function player_update(){

  fabric.Image.fromURL("player.png",function(Img){
                       
  player_object=Img;
  player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	blockimg_object = Img;

	blockimg_object.scaleToWidth(blockimg_width);
	blockimg_object.scaleToHeight(blockimg_height);
	blockimg_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(blockimg_object);

	});

}
