
function Matrix4Update(newPos, newDir, newMiniPos) {

  tank.matrixAutoUpdate = false;
  var pos = new THREE.Vector3 (  // copy NOW pos from matrix
    tank.matrix.elements[12], tank.matrix.elements[13],
    tank.matrix.elements[14]);
  var newPos4 = pos.clone().add (newPos);

  localX = newDir.clone();
  localY = new THREE.Vector3(changeX, changeY, changeZ);
  localZ = new THREE.Vector3();
  localZ.crossVectors(localX, localY);
  tank.matrix.makeBasis(localX, localY, localZ);
  tank.matrix.setPosition(newPos4);
  tank.matrixAutoUpdate = false;

  //////////////////////////////////////////////////////////////////////////////

  miniAvatar.matrix.makeBasis(localX, localY, localZ);
  miniAvatar.matrix.setPosition(newMiniPos);
  miniAvatar.matrixAutoUpdate = false;

}

function moveOnNy() {

  var newPos = new THREE.Vector3(go, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), totalChange);

  var newMiniPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newMiniPos.y = -75;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), change);
  Matrix4Update(newPos, newDir, newMiniPos);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, 1, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnPx() {

  var newPos = new THREE.Vector3(0, go, 0).applyAxisAngle(new THREE.Vector3(-1, 0, 0), totalChange);

  var newMiniPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newMiniPos.x = 75;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(-1, 0, 0), change);
  Matrix4Update(newPos, newDir, newMiniPos);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(-1, 0, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnPy() {

  var newPos = new THREE.Vector3(-go, 0, 0).applyAxisAngle(new THREE.Vector3(0, -1, 0), totalChange);

  var newMiniPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newMiniPos.y = 75

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, -1, 0), change);
  Matrix4Update(newPos, newDir, newMiniPos);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, -1, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnNx() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.x = -67;

  var newMiniPos = newPos.clone();
  newMiniPos.x = -75

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(1, 0, 0), change);
  Matrix4Update(newPos, newDir, newMiniPos);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(1, 0, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnPz() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.z = 67;

  var newMiniPos = newPos.clone();
  newMiniPos.z = 75

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, 0, -1), change);
  Matrix4Update(newPos, newDir, newMiniPos);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, 0, -1);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnNz() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.z = -67;

  var newMiniPos = newPos.clone();
  newMiniPos.z = -75

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, 0, 1), change);
  Matrix4Update(newPos, newDir, newMiniPos);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, 0, 1);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}
