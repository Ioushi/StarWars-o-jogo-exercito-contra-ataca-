var fundo
//naves
var i1
var i2
var i3
//bixos
var i5
var i6
//naves e etc
var navezinha
var tiro
var contagemTiro = 0
var ginimigo
var gtiro
var gmnst
var gameState=0
//boster
var boosterTiro
var boosterVida
var boosterVelo
var gbosterVe
var gbosterVi
var gbosterTi
//matematics😎
var x = 1
var vida = 3
//👨‍🔧👩‍🔧
var parede
var count = 0

function preload(){
    fundo = loadImage("imagens/funddo.png")
i1 = loadImage("imagens/download(2).png")
i2 = loadImage("imagens/download(3).png")
i3 = loadImage("imagens/download(5).png")
//.
i5 = loadImage("imagens/download(6).png")
i6 = loadImage("imagens/download(7).png")
//.
navezinha = loadImage("imagens/download.png")
boosterTiro = loadImage("imagens/download(8).png")
boosterVida = loadImage("imagens/download(10).png")
boosterVelo = loadImage("imagens/download(9).png")
fund0 = loadImage("imagens/aaaa.jpg")
gameo = loadImage("imagens/acabo.png")
}

function setup() {
    createCanvas(windowWidth,windowHeight)

    navesinha = createSprite(width/2,height-100)
    navesinha . addImage(navezinha)
    navesinha . rotation = 180


    gtiro = createGroup()
    ginimigo = createGroup()
gmnst = createGroup()
gbosterTi = createGroup()
gbosterVi = createGroup()
gbosterVe = createGroup()
   parede = createSprite(windowWidth/2,windowHeight,windowWidth,10) 
   parede.visible = false
gameover = createSprite(windowWidth/2,windowHeight/2,100,70)
gameover . addImage(gameo)
gameover . visible = false
}

function draw() {


if (gameState == 0){
 background(fundo)
    

 textSize(30)
 stroke("red")
 strokeWeight(5)
 fill("Yellow")
 text(vida,width-110,100)




    textSize(30)
    stroke("red")
    strokeWeight(5)
    fill("Yellow")
    text(contagemTiro,width-70,100)
    navesinha.x = mouseX
    navesinha.y = mouseY

    if(keyDown("SPACE")){


        if(contagemTiro<=5){
            tiro = createSprite(navesinha.x,navesinha.y,10,70)
            gtiro.add(tiro)
            tiro.velocityY = -5*x
                tiro.lifetime = 700
            contagemTiro++
            tiro.shapeColor = "#574169"
        }
        
        
        }
        if (contagemTiro==6){
            console.log("oi")    
            if (frameCount%30==0){
                    contagemTiro=0
        
                }
              
        }
kabum()
    kabum2()
        Bvelocidade()
                 Btiro()
                 Bvida()
        kabum5()
    kabum4()
kabum3()

if(vida == 0){
    gameState=1
}
if (gmnst.isTouching(navesinha)){
    vida-- 
}
if (ginimigo.isTouching(parede)){
    vida-- 
}
if (navesinha.isTouching(ginimigo)){
   
    if(count==0)
        
        
        {
        vida--
        count=1
    
    }
    else{
        if(frameCount%15==0){count=0}
    }
}
}
if (gameState == 1){
    background(fund0)
gameover.visible = true
navesinha . visible = false
}




if (frameCount%30==0){
    obstaculo()
}
if (frameCount%100==0){
    obstaculo2()
}



drawSprites()
        }

    


function obstaculo(){
var obs
obs = createSprite(Math.round(random(0,windowWidth-100)),50)
ginimigo.add(obs)
switch(Math.round(random(1,3))){

    case 1 :obs.addImage(i1)
break
    case 2 :    obs.addImage(i2)
break                               
    case 3 :        obs.addImage(i3)
break
}

obs.velocityY = 2*x
obs.lifetime = 700
}
function obstaculo2(){
var obs2
obs2 = createSprite(Math.round(random(0,windowWidth)),50)
gmnst.add(obs2)
switch(Math.round(random(1,2))){

    case 1 :obs2.addImage(i5)
break
    case 2 :    obs2.addImage(i6)
break                               

}
obs2.scale = 0.3
obs2.velocityY = 5*x
obs2.lifetime = 700
}
function kabum(){
gtiro.overlap(ginimigo,function(collector,collected){collected.remove()})
}
function kabum2(){
gmnst.overlap(gtiro,function(collector,collected){collected.remove()  })
if(ginimigo.isTouching(navesinha)){
}
}




//oi






function kabum3(){
 gtiro.overlap(gbosterVe,function(collector,collected){collected.remove()

var R = Math.round(random(1,2))
if (R == 1){
    x=x+0.5
    
    }
if (x >= 0.9){
   console.log(x)
    
        if (R ==2){
            x=x-0.8
        }
        }



})
}
function kabum4(){
     gtiro.overlap(gbosterTi,function(collector,collected){collected.remove()})


}
function kabum5(){
         gtiro.overlap(gbosterVi,function(collector,collected){collected.remove()
        
    vida++})

}
//AAAAAAAAAAAAAAAAAAAAAAAAAAA
function Bvelocidade(){
if(frameCount%300 == 0){
bosterVelo = createSprite(Math.round(random(0,windowWidth)),50)
bosterVelo.addImage(boosterVelo)
bosterVelo.scale = 0.3
bosterVelo.velocityY = 7*x
bosterVelo.lifetime = 700
gbosterVe.add(bosterVelo)
}
}
function Btiro(){
    if(frameCount%450 == 0){
        bosterTiro = createSprite(Math.round(random(0,windowWidth)),50)
        bosterTiro.addImage(boosterTiro)
bosterTiro.scale = 2
bosterTiro.velocityY = 7*x
bosterTiro.lifetime = 700
gbosterTi.add(bosterTiro)
}
}
function Bvida (){
    if(frameCount%1000 == 0){
        bosterVida = createSprite(Math.round(random(0,windowWidth)),50)
        bosterVida.addImage(boosterVida)
        bosterVida.velocityY = 10*x
bosterVida.lifetime = 700
gbosterVi.add(bosterVida)

}
}
//AAAAAAAAAAAAAAAAAAAAAAAAAAA












//👾👾👽👻☠👽👽💩👽😺🤓🙀😽💩