
function changeTurn(pos1, quat1, pos2, quat2) {

  console.log('in turn');

  alpha += 0.01;

  var qm = quat1.clone();
  qm.slerp(quat2, alpha);

  tank.matrix.makeRotationFromQuaternion(qm);

  var pp = pos1.clone();
  pp.lerp(pos2, alpha);
  tank.matrix.setPosition(pp);

  return alpha;

}

function changePlane(){

  var detection = tank.localToWorld(new THREE.Vector3(10, 0, 0));

  //faceNy, up = +Y = Vector3(0, 1, 0)
  if (changeX === 0 && changeY === 1 && changeZ === 0 && detection.x <= 75 && detection.x >= -75 && detection.z <= 75 && detection.z >= -75){

    motionHint.rotation.y = Math.atan2( -tank.worldToLocal(target.localToWorld(new THREE.Vector3(0, 0, 0))).z, tank.worldToLocal(target.localToWorld(new THREE.Vector3(0, 0, 0))).x );
    motionHintBall.rotation.y = Math.atan2( -tank.worldToLocal(ball.localToWorld(new THREE.Vector3(0, 0, 0))).z, tank.worldToLocal(ball.localToWorld(new THREE.Vector3(0, 0, 0))).x );

    if(camera.position.x > 74)
      for (var i = 0; i < 388; i++)
        wallPx[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallPx[i].alive === true)
          wallPx[i].visible = true;

    if(camera.position.x < -74)
      for (var i = 0; i < 388; i++)
        wallNx[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallNx[i].alive === true)
          wallNx[i].visible = true;

    if(camera.position.z > 74)
      for (var i = 0; i < 388; i++)
        wallPz[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallPz[i].alive === true)
          wallPz[i].visible = true;

    if(camera.position.z < -74)
      for (var i = 0; i < 388; i++)
        wallNz[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallNz[i].alive === true)
          wallNz[i].visible = true;

  }

  //facePx, up = -x = Vector3(-1, 0, 0)
  if (changeX === -1 && changeY === 0 && changeZ === 0 && detection.y <= 75 && detection.y >= -75 && detection.z <= 75 && detection.z >= -75){

    motionHint.rotation.y = Math.atan2( -tank.worldToLocal(target.localToWorld(new THREE.Vector3(0, 0, 0))).z, tank.worldToLocal(target.localToWorld(new THREE.Vector3(0, 0, 0))).x );
    motionHintBall.rotation.y = Math.atan2( -tank.worldToLocal(ball.localToWorld(new THREE.Vector3(0, 0, 0))).z, tank.worldToLocal(ball.localToWorld(new THREE.Vector3(0, 0, 0))).x );

    if(camera.position.y > 74)
      for (var i = 0; i < 388; i++)
        wallPy[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallPy[i].alive === true)
          wallPy[i].visible = true;

    if(camera.position.y < -74)
      for (var i = 0; i < 388; i++)
        wallNy[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallNy[i].alive === true)
          wallNy[i].visible = true;

    if(camera.position.z > 74)
      for (var i = 0; i < 388; i++)
        wallPz[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallPz[i].alive === true)
          wallPz[i].visible = true;

    if(camera.position.z < -74)
      for (var i = 0; i < 388; i++)
        wallNz[i].visible = false;
    else
      for (var i = 0; i < 388; i++)
        if(wallNz[i].alive === true)
          wallNz[i].visible = true;

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (turning) {

    cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
    camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);

    if(ONPLANE === 0)
      upTemp.set(0, 1, 0);
    if(ONPLANE === 1)
      upTemp.set(-1, 0, 0);

    camera.up.copy(upTemp);
    camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

    alpha = changeTurn(pos1, quat1, pos2, quat2);

    if (alpha > 1) {
      turning = false;
      ONPLANE = TOPLANE;
      alpha = 0;
    }
    return;

  }

  planeNormal = planeMoves[ONPLANE].planeNormal;
  var move = planeMoves[ONPLANE].moveFunc;
  var posNow = move();

  if (ONPLANE === 0 && pos.x > 55) { // switch to turning

    turning = true;
    // the following states (pos1 & pos2, quat1 & quat2) are global
    pos1 = tank.localToWorld(new THREE.Vector3(0, 0, 0));
    quat1.setFromRotationMatrix(tank.matrix);

    avatarBody = detection.clone().sub(tank.localToWorld(new THREE.Vector3(0, 0, 0)));
    tankP = tank.clone().localToWorld(new THREE.Vector3(0, 0, 0)).add(avatarBody);
    v = tankP.clone().add(avatarBody).sub(detection);
    nD = v.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);

    changeX = -1;
    changeY = 0;
    changeZ = 0;

    TOPLANE = 1; // move to plane Px
    var rotation = planeMoves[ONPLANE].planeNormal.clone().cross(planeMoves[TOPLANE].planeNormal);

    pos2 = tank.clone().localToWorld(new THREE.Vector3(0, 0, 0)).add(avatarBody).add(nD);
    quat2.setFromAxisAngle(rotation, Math.PI / 2);
    changeTurn(pos1, quat1, pos2, quat2);

  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (ONPLANE === 1 && pos.y > 55) { // switch to turning

    turning = true;
    // the following states (pos1 & pos2, quat1 & quat2) are global
    pos1 = tank.localToWorld(new THREE.Vector3(0, 0, 0));
    quat1.setFromRotationMatrix(tank.matrix);

    avatarBody = detection.clone().sub(tank.localToWorld(new THREE.Vector3(0, 0, 0)));
    tankP = tank.clone().localToWorld(new THREE.Vector3(0, 0, 0)).add(avatarBody);
    v = tankP.clone().add(avatarBody).sub(detection);
    nD = v.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);

    changeX = 0;
    changeY = -1;
    changeZ = 0;

    TOPLANE = 2; // move to plane Px
    var rotation = planeMoves[ONPLANE].planeNormal.clone().cross(planeMoves[TOPLANE].planeNormal);

    pos2 = tank.clone().localToWorld(new THREE.Vector3(0, 0, 0)).add(avatarBody).add(nD);
    quat2.setFromAxisAngle(rotation, Math.PI / 2);
    changeTurn(pos1, quat1, pos2, quat2);

  }
  
}