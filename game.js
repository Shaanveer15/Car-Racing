class Game{
consturctor(){}
getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on ("value", function(data){
        gameState=data.val();
    })
}
update(state){
    database.ref('/').update({gameState:state})
}

async Start(){
if(gameState===0){
player=new Player();
var PlayerCountRef=await database.ref('playerCount').once("value")
if(PlayerCountRef.exists()){
    playerCount=PlayerCountRef.val();
    player.getCount(); 
}

form=new Form();
form.display();
}
car1=createSprite(100,200);
car2=createSprite(300,200);
car3=createSprite(500,200);
car4=createSprite(700,200);
cars=[car1,car2,car3,car4]
}
Play(){
form.hide();
//textSize(13)
//text("gameStart", 150,100)
Player.getPlayerInfo();
if(allPlayers!==undefined){
    var index=0
    var x=0 
    var y
//var displayposition=130
for(var plr in allPlayers){
    index=index+1;
    x=x+200
    y=displayHeight-allPlayers[plr].distance
    cars[index-1].x=x;
  cars[index-1].y=y;
if(index===player.index){
cars[index-1].shapeColor="red"
 camera.position.x=displayWidth/2
 camera.position.y=cars[index-1].y
}

//text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayposition)
}
} 
if(keyIsDown(UP_ARROW)&&Player.index!==null){
    player.distance+=50
    player.update();
}

drawSprites();
}
}
