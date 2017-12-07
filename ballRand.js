function randBallPos(){

    var face = Math.floor(Math.random()*6);

    if(face === 0){

      do{

        face = Math.floor(Math.random()*388);

      }while(wallPx[face].visible === false);

      ballPos.set(wallPx[face].position.x - 4.4, wallPx[face].position.y, wallPx[face].position.z);

    }

  if(face === 1){

    do{

      face = Math.floor(Math.random()*388);

    }while(wallNx[face].visible === false);

    ballPos.set(wallNx[face].position.x + 4.4, wallNx[face].position.y, wallNx[face].position.z);

  }

  if(face === 2){

    do{

      face = Math.floor(Math.random()*388);

    }while(wallPy[face].visible === false);

    ballPos.set(wallPy[face].position.x, wallPy[face].position.y - 4.4, wallPy[face].position.z);

  }

  if(face === 3){

    do{

      face = Math.floor(Math.random()*388);

    }while(wallNy[face].visible === false);

    ballPos.set(wallNy[face].position.x, wallNy[face].position.y + 4.4, wallNy[face].position.z);

  }

  if(face === 4){

    do{

      face = Math.floor(Math.random()*388);

    }while(wallPz[face].visible === false);

    ballPos.set(wallPz[face].position.x, wallPz[face].position.y, wallPz[face].position.z - 4.4);

  }

  if(face === 5){

    do{

      face = Math.floor(Math.random()*388);

    }while(wallNz[face].visible === false);

    ballPos.set(wallNz[face].position.x, wallNz[face].position.y, wallNz[face].position.z + 4.4);

  }
  
}
