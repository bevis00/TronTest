var xangle = 0;
var zangle = 0;
var sceneHUD, cameraHUD;
var barA, barB;

function HUDinit() {
    sceneHUD = new THREE.Scene();
    cameraHUD = new THREE.OrthographicCamera(-10, 10, 10, -10, 1, 100);
    cameraHUD.position.z = 5;
    cameraHUD.lookAt(new THREE.Vector3(0, 0, 0));

    barA = new THREE.Object3D();
    powerA = new THREE.Mesh(new THREE.PlaneGeometry(1, 4),
    new THREE.MeshBasicMaterial({
        color: 0xff1233,
        opacity: 0.5,
        side: THREE.DoubleSide,
        transparent: true
    }));
    powerA.position.set(-2, 2, 0);
    barA.add(powerA);
    sceneHUD.add(barA);

    barB = new THREE.Object3D();
    powerB = new THREE.Mesh(new THREE.PlaneGeometry(1, 4),
    new THREE.MeshBasicMaterial({
        color: 0x2212ff,
        opacity: 0.5,
        side: THREE.DoubleSide,
        transparent: true
    }));
    powerB.position.set(2, 2, 0);
    barB.add(powerB);
    sceneHUD.add(barB);

    renderer.autoClear = false;
}

function HUDAnimate() {

    if (power) { // move forward
        xangle -= 0.01;
    }
    if (brake) { // move backward
        xangle += 0.01;
    }
    if (turnLeft) { // left turn
        zangle += 0.005;
    }
    if (turnRight) { // right turn
        zangle -= 0.005;
    }

    xangle *= 0.98;
    zangle *= 0.98;

    xangle = myclamp(xangle, -0.2, 0.1);
    zangle = myclamp(zangle, -0.1, 0.1);

    pilot.rotation.x = -xangle;
    pilot.rotation.z = -zangle;

    // compute Sa and Sb
    /*var forward = -xangle * 10;
    var small = forward * (1 - Math.abs(zangle) / 0.1 * 1.8);
    if (zangle > 0) {
        sa = small;
        sb = forward;
    } else {
        sa = forward;
        sb = small;
    }*/

    barA.scale.copy(new THREE.Vector3(1, Math.abs(sa/40), 1));
    barB.scale.copy(new THREE.Vector3(1, Math.abs(sb/40), 1));

    var xxa, xxb;

    if (sa < 0) {
        xxa = Math.PI;
        barA.children[0].material.color = new THREE.Color(0xffffff);
    } else {
        xxa = 0;
        barA.children[0].material.color = new THREE.Color(0xff0000);
    }
    barA.rotation.x = xxa;

    if (sb < 0) {
        xxb = Math.PI;
        barB.children[0].material.color = new THREE.Color(0xffffff);
    } else {
        xxb = 0;
        barB.children[0].material.color = new THREE.Color(0x0000ff);
    }
    barB.rotation.x = xxb;
}