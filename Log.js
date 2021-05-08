class Log{
    constructor(speed){
        this.x = random([200,400,600,800,1000]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 800;//random([1225, 1250, 1275, 1300, 1350]);
        this.height = 800;
        this.speed = speed;
        this.spt = createSprite(this.x,this.y, this.width, this.width);
        
        this.spt.shapeColor = "brown";
        this.spt.scale=0.1;

        // if(this.y==height-650 || this.y==height-1350 || this.y==height-1550)
        // {
        //     speed=-speed;
        // }
        this.spt.velocityX = speed;
    }

   
}