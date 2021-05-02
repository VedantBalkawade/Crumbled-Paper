class paper{
	constructor(x,y,r)
	{
		var options = {
            "isStatic":false,
            'restitution':0.3,
            'friction':0,
            'density':1.2,
            
        }
	// assign options to the rubber ball
		this.image=loadImage("paper.png")
    this.body=Bodies.circle(x,y,(r-20)/2, options)
    
    
    World.add(world, this.body);

}
display()
{
        var paperpos=this.body.position;
       // var angle=this.body.angle		
        push()
        translate(paperpos.x, paperpos.y);
       // rotate(angle)
        rectMode(CENTER)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)

      //  strokeWeight(4);
       // stroke("black");
       // fill("black");
        //draw the ellipse here to display the rubber ball
       // rect(0,0,this.width,this.height)

        pop()
}

}