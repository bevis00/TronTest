
function raytest() {

  var laserdir = barrel.clone().localToWorld(new THREE.Vector3(0, 1, 0)).sub(barrel.clone().localToWorld(new THREE.Vector3(0, 0, 0)));

  raycaster.set(barrel.localToWorld(new THREE.Vector3(0, 1, 0)), laserdir);
  intersects = raycaster.intersectObjects(pickables);

  if (intersects.length > 0) {

    //facePX
    if (intersects[0].object.name === "plane0" || intersects[0].object.name === "wallPx") {

      var n = new THREE.Vector3(-1, 0, 0);

    }

    if (intersects[0].object.name === "plane1" || intersects[0].object.name === "wallNx") {

      n = new THREE.Vector3(1, 0, 0);

    }

    if (intersects[0].object.name === "plane2" || intersects[0].object.name === "wallPy") {

      n = new THREE.Vector3(0, -1, 0);

    }

    if (intersects[0].object.name === "plane3" || intersects[0].object.name === "wallNy") {

      n = new THREE.Vector3(0, 1, 0);

    }

    if (intersects[0].object.name === "plane4" || intersects[0].object.name === "wallPz") {

      n = new THREE.Vector3(0, 0, -1);

    }

    if (intersects[0].object.name === "plane5" || intersects[0].object.name === "wallNz") {

      n = new THREE.Vector3(0, 0, 1);

    }
    if (intersects[0].object.name ==="Breakout"){

      n = intersectsR[0].point.clone().sub(new THREE.Vector3(0,0,0));
    }

      var r = laserdir.sub(n.multiplyScalar(2 * (laserdir.dot(n))));

      raycasterR.set(intersects[0].point, r.normalize());
      intersectsR = raycasterR.intersectObjects(pickables);

      if (intersectsR.length > 0) {

        //facePX
        if (intersectsR[0].object.name === "plane0" || intersectsR[0].object.name === "wallPx") {

          var n = new THREE.Vector3(-1, 0, 0);

        }

        if (intersectsR[0].object.name === "plane1" || intersectsR[0].object.name === "wallNx") {

          n = new THREE.Vector3(1, 0, 0);

        }

        if (intersectsR[0].object.name === "plane2" || intersectsR[0].object.name === "wallPy") {

          n = new THREE.Vector3(0, -1, 0);

        }

        if (intersectsR[0].object.name === "plane3" || intersectsR[0].object.name === "wallNy") {

          n = new THREE.Vector3(0, 1, 0);

        }

        if (intersectsR[0].object.name === "plane4" || intersectsR[0].object.name === "wallPz") {

          n = new THREE.Vector3(0, 0, -1);

        }

        if (intersectsR[0].object.name === "plane5" || intersectsR[0].object.name === "wallNz") {

          n = new THREE.Vector3(0, 0, 1);

        }
        if (intersectsR[0].object.name ==="Breakout"){

          n = intersectsR[0].point.clone().sub(new THREE.Vector3(0,0,0));
        }


          r = r.sub(n.multiplyScalar(2 * (r.dot(n))));

          raycasterR2.set(intersectsR[0].point, r.normalize());
          intersectsR2 = raycasterR2.intersectObjects(pickables);

          if (intersectsR2.length > 0) {

            //facePX
            if (intersectsR2[0].object.name === "plane0" || intersectsR2[0].object.name === "wallPx") {

              n = new THREE.Vector3(-1, 0, 0);

            }

            if (intersectsR2[0].object.name === "plane1" || intersectsR2[0].object.name === "wallNx") {

              n = new THREE.Vector3(1, 0, 0);

            }

            if (intersectsR2[0].object.name === "plane2" || intersectsR2[0].object.name === "wallPy") {

              n = new THREE.Vector3(0, -1, 0);

            }

            if (intersectsR2[0].object.name === "plane3" || intersectsR2[0].object.name === "wallNy") {

              n = new THREE.Vector3(0, 1, 0);

            }

            if (intersectsR2[0].object.name === "plane4" || intersectsR2[0].object.name === "wallPz") {

              n = new THREE.Vector3(0, 0, -1);

            }

            if (intersectsR2[0].object.name === "plane5" || intersectsR2[0].object.name === "wallNz") {

              n = new THREE.Vector3(0, 0, 1);

            }
            if (intersectsR2[0].object.name ==="Breakout"){

              n = intersectsR[0].point.clone().sub(new THREE.Vector3(0,0,0));
            }

          }

      }

  }

}


function Targeting(){

  if(ball.position.distanceTo(target.position) < 5){
    do{
      target.position.set(myRand(-65,65),myRand(-65,65),myRand(-65,65));
      target.rotation.x=myRand(0,3);
    }while(target.position.distanceTo(new THREE.Vector3(0,0,0))< 47 );
  }

  miniTarget.position.copy(target.position);

}

function fireBall(){
  vel = (barrel.clone().localToWorld(new THREE.Vector3(0, 1, 0)).sub(barrel .localToWorld(new THREE.Vector3(0, 0, 0)))).multiplyScalar(90);
}

function reflactVel(n){
  vel.sub(n.multiplyScalar(2 * (vel.dot(n)))).multiplyScalar(0.7);
  console.log(vel.length());
}
