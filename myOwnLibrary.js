function bouncing(obj1, obj2){
    if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
      obj2.x-obj1.x<=obj1.width/2+obj2.width/2 && 
      obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
  
        obj2.velocityX = obj2.velocityX*(-1);
        obj1.velocityX = obj1.velocityX*(-1);
        
      }
      else{
        obj1.velocityX = obj1.velocityX;
        obj2.velocityX = obj2.velocityX;
        
      }
  }
  function touching(obj1, obj2){
    if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && 
      obj2.x-obj1.x<=obj1.width/2+obj2.width/2 && 
      obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y<=obj1.height/2+obj2.height/2){
      return true;
        
      }
      else{
      return false;  
        
      }
  }