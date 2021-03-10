var Ball = function(ballType) {
 return (ballType == undefined) ? { ballType : "regular"} : { ballType: "super" };

}; 

const ball1 = new Ball ();


// expected
/**
 
ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

**/