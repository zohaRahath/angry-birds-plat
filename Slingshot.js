class Slingshot{
constructor(bodyA,pointB){
var option={
bodyA:bodyA,
pointB:pointB,
stiffness:0.05,
length:10
}
this.condition=Matter.Constraint.create(option)
this.pointB=pointB
World.add(world, this.condition);

}
display(){
    stroke("black");
   
      strokeWeight(4); 
   if(this.condition.bodyA!=null){
    var pointA = this.condition.bodyA.position;
    var pointB = this.pointB;
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    
   }




//line(this.condition.bodyA.position.x,this.condition.bobyA.position.y,this.condition.bodyB.position.x,this.condition.bodyB.position.y)
}
fly(){
this.condition.bodyA=null;


}































}