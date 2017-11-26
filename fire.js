
function makeLaser() {

  var laserBase = barrel.clone().position;
  var lineGeometry = new THREE.Geometry();
  var laserEnd = barrel.clone().worldToLocal(intersects[0].point.clone());

  lineGeometry.vertices.push(new THREE.Vector3(laserBase.x, laserBase.y, laserBase.z), new THREE.Vector3(laserEnd.y, laserEnd.x, laserEnd.z));
  lineGeometry.computeLineDistances();

  var lineMaterial = new THREE.LineDashedMaterial({
    color: 0xff0000,
    dashSize: 10,
    gapSize: 2
  });

  var line = new THREE.Line(lineGeometry, lineMaterial);

  return line;

}

function makeLaserR() {

  var laserBase = intersects[0].point;
  var lineGeometry = new THREE.Geometry();
  var laserEnd = intersectsR[0].point;

  lineGeometry.vertices.push(laserBase, laserEnd);
  lineGeometry.computeLineDistances();

  var lineMaterial = new THREE.LineDashedMaterial({
    color: 0xffffff,
    dashSize: 10,
    gapSize: 2
  });

  var line = new THREE.Line(lineGeometry, lineMaterial);

  return line;

}

function makeLaserR2() {

  var laserBase = intersectsR[0].point;
  var lineGeometry = new THREE.Geometry();
  var laserEnd = intersectsR2[0].point;

  lineGeometry.vertices.push(laserBase, laserEnd);
  lineGeometry.computeLineDistances();

  var lineMaterial = new THREE.LineDashedMaterial({
    color: 0xffffff,
    dashSize: 10,
    gapSize: 2
  });

  var line = new THREE.Line(lineGeometry, lineMaterial);

  return line;

}

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

              r = r.sub(n.multiplyScalar(2 * (r.dot(n))));

              raycasterR3.set(intersectsR2[0].point, r.normalize());
              intersectsR3 = raycasterR3.intersectObjects(pickables);

              if (intersectsR3.length > 0) {

                //facePX
                if (intersectsR3[0].object.name === "plane0" || intersectsR3[0].object.name === "wallPx") {

                  n = new THREE.Vector3(-1, 0, 0);

                }

                if (intersectsR3[0].object.name === "plane1" || intersectsR3[0].object.name === "wallNx") {

                  n = new THREE.Vector3(1, 0, 0);

                }

                if (intersectsR3[0].object.name === "plane2" || intersectsR3[0].object.name === "wallPy") {

                  n = new THREE.Vector3(0, -1, 0);

                }

                if (intersectsR3[0].object.name === "plane3" || intersectsR3[0].object.name === "wallNy") {

                  n = new THREE.Vector3(0, 1, 0);

                }

                if (intersectsR3[0].object.name === "plane4" || intersectsR3[0].object.name === "wallPz") {

                  n = new THREE.Vector3(0, 0, -1);

                }

                if (intersectsR3[0].object.name === "plane5" || intersectsR3[0].object.name === "wallNz") {

                  n = new THREE.Vector3(0, 0, 1);

                }
                if (intersectsR3[0].object.name ==="Breakout"){

                  n = intersectsR[0].point.clone().sub(new THREE.Vector3(0,0,0));
                }

                  r = r.sub(n.multiplyScalar(2 * (r.dot(n))));

                  raycasterR4.set(intersectsR3[0].point, r.normalize());
                  intersectsR4 = raycasterR4.intersectObjects(pickables);

                  if (intersectsR4.length > 0) {

                    //facePX
                    if (intersectsR4[0].object.name === "plane0" || intersectsR4[0].object.name === "wallPx") {

                      n = new THREE.Vector3(-1, 0, 0);

                    }

                    if (intersectsR4[0].object.name === "plane1" || intersectsR4[0].object.name === "wallNx") {

                      n = new THREE.Vector3(1, 0, 0);

                    }

                    if (intersectsR4[0].object.name === "plane2" || intersectsR4[0].object.name === "wallPy") {

                      n = new THREE.Vector3(0, -1, 0);

                    }

                    if (intersectsR4[0].object.name === "plane3" || intersectsR4[0].object.name === "wallNy") {

                      n = new THREE.Vector3(0, 1, 0);

                    }

                    if (intersectsR4[0].object.name === "plane4" || intersectsR4[0].object.name === "wallPz") {

                      n = new THREE.Vector3(0, 0, -1);

                    }

                    if (intersectsR4[0].object.name === "plane5" || intersectsR4[0].object.name === "wallNz") {

                      n = new THREE.Vector3(0, 0, 1);

                    }
                    if (intersectsR4[0].object.name ==="Breakout"){

                      n = intersectsR[0].point.clone().sub(new THREE.Vector3(0,0,0));
                    }

                      r = r.sub(n.multiplyScalar(2 * (r.dot(n))));

                      raycasterR5.set(intersectsR4[0].point, r.normalize());
                      intersectsR5 = raycasterR5.intersectObjects(pickables);


                  }

              }

          }

      }

  }

}

function fireMove() {

	dataPoints.push (

  	barrel.localToWorld(new THREE.Vector3(0, 0, 0)),
    barrel.localToWorld(new THREE.Vector3(0, 0, 0)).add(barrel.localToWorld(new THREE.Vector3(0, 0, 0)).add(intersects[0].point).multiplyScalar (1/2)).multiplyScalar (1/2),
    barrel.localToWorld(new THREE.Vector3(0, 0, 0)).add(intersects[0].point).multiplyScalar (1/2),
    barrel.localToWorld(new THREE.Vector3(0, 0, 0)).add(intersects[0].point).multiplyScalar (1/2).add(intersects[0].point).multiplyScalar (1/2),
  	intersects[0].point,
    intersects[0].point,
    intersects[0].point.clone().add(intersects[0].point.clone().add(intersectsR[0].point).multiplyScalar (1/2)).multiplyScalar (1/2),
    intersects[0].point.clone().add(intersectsR[0].point).multiplyScalar (1/2),
    intersects[0].point.clone().add(intersectsR[0].point).multiplyScalar (1/2).add(intersectsR[0].point).multiplyScalar (1/2),
  	intersectsR[0].point,
    intersectsR[0].point,
    intersectsR[0].point.clone().add(intersectsR[0].point.clone().add(intersectsR2[0].point).multiplyScalar (1/2)).multiplyScalar (1/2),
    intersectsR[0].point.clone().add(intersectsR2[0].point).multiplyScalar (1/2),
    intersectsR[0].point.clone().add(intersectsR2[0].point).multiplyScalar (1/2).add(intersectsR2[0].point).multiplyScalar (1/2),
    intersectsR2[0].point,
    intersectsR2[0].point,
    intersectsR2[0].point.clone().add(intersectsR2[0].point.clone().add(intersectsR3[0].point).multiplyScalar (1/2)).multiplyScalar (1/2),
    intersectsR2[0].point.clone().add(intersectsR3[0].point).multiplyScalar (1/2),
    intersectsR2[0].point.clone().add(intersectsR3[0].point).multiplyScalar (1/2).add(intersectsR3[0].point).multiplyScalar (1/2),
    intersectsR3[0].point,
    intersectsR3[0].point,
    intersectsR3[0].point.clone().add(intersectsR3[0].point.clone().add(intersectsR4[0].point).multiplyScalar (1/2)).multiplyScalar (1/2),
    intersectsR3[0].point.clone().add(intersectsR4[0].point).multiplyScalar (1/2),
    intersectsR3[0].point.clone().add(intersectsR4[0].point).multiplyScalar (1/2).add(intersectsR4[0].point).multiplyScalar (1/2),
    intersectsR4[0].point,
    intersectsR4[0].point,
    intersectsR4[0].point.clone().add(intersectsR4[0].point.clone().add(intersectsR5[0].point).multiplyScalar (1/2)).multiplyScalar (1/2),
    intersectsR4[0].point.clone().add(intersectsR5[0].point).multiplyScalar (1/2),
    intersectsR4[0].point.clone().add(intersectsR5[0].point).multiplyScalar (1/2).add(intersectsR5[0].point).multiplyScalar (1/2),
    intersectsR5[0].point,
    intersectsR5[0].point

  );

  curve = new THREE.CatmullRomCurve3(dataPoints);
  curve.type = "catmullrom";

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
