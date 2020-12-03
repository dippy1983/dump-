class Box{
    constructor(x,y,height,width){
        var option={
isStatic:true
        }


this.body=Bodies.rectangle(x,y,width,height,option)
World.add(world,this.body)



    }
    display(){
var pos=this.body.position  

rectMode(CENTER)
strokeWeight(4)
stroke("green")
fill(255)
rect(0,0,this.height,this.width)

    }



}
