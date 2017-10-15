
function Matrix4Update(newPos, newDir) {

  var localX = newDir.clone();
  var localY = new THREE.Vector3(changeX, changeY, changeZ);
  var localZ = new THREE.Vector3();
  localZ.crossVectors(localX, localY);
  tank.matrix.makeBasis(localX, localY, localZ);
  tank.matrix.setPosition(newPos);
  tank.matrixAutoUpdate = false;

}

function moveOnNy() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.y = -67;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), change);
  Matrix4Update(newPos, newDir);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, 1, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnPx() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.x = 67;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(-1, 0, 0), change);
  Matrix4Update(newPos, newDir);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(-1, 0, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnPy() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.y = 67;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, -1, 0), change);
  Matrix4Update(newPos, newDir);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, -1, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnNx() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.x = -67;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(1, 0, 0), change);
  Matrix4Update(newPos, newDir);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(1, 0, 0);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnPz() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.z = 67;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, 0, -1), change);
  Matrix4Update(newPos, newDir);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, 0, -1);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}

function moveOnNz() {

  var newPos = tank.localToWorld(new THREE.Vector3(go, 0, 0));
  newPos.z = -67;

  var newDir = vP.normalize();
  newDir.applyAxisAngle(new THREE.Vector3(0, 0, 1), change);
  Matrix4Update(newPos, newDir);

  cameraOffset = tank.localToWorld(new THREE.Vector3(-45, 7, 0));
  camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
  upTemp.set(0, 0, 1);
  camera.up.copy(upTemp);
  camera.lookAt(barrel.localToWorld(new THREE.Vector3(0, 10, 0)));

}
