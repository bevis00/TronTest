var pa = new THREE.Vector3(0, 0, -30);
var pb = new THREE.Vector3(0, 0, 30);
var pc = new THREE.Vector3(0,0,0);
var sa = 0;
var sb = 0;
var k = 0;

var speed = 2;

function driveUpdate(dt)
{
	var center = new THREE.Vector3();
    var tmp = new THREE.Vector3();
    var l = tmp.subVectors(pa, pb).length();

    k = l * sa / (sb - sa);
    var omega = (sb - sa) / l;
    //if (omega === 0.0) {
    if (Math.abs(sa-sb) < 1e-3) {    // this gives better result (no jerk)
    	tmp.subVectors(pa, pb).normalize().cross(new THREE.Vector3(0, 1, 0)).multiplyScalar(sa * dt);
        pa.add(tmp);
        pb.add(tmp);
		tire2.position.set(pa.x, 21, pa.z);
    	tire.position.set(pb.x, 21, pb.z);

    	tire.rotation.order = 'XYZ';
    	tire2.rotation.order = 'XYZ';

	    tire.rotation.z -= sb*dt/15;
    	tire2.rotation.z -= sa*dt/15;

        return; // do a pure translation then return
    }

    tmp.subVectors(pa, pb).normalize().multiplyScalar(k);
    center.copy(tmp.add(pa));

    tmp.subVectors(pa, center)
        .applyAxisAngle(new THREE.Vector3(0, 1, 0), omega * dt)
        .add(center);
    pa.copy(tmp);

    tmp.subVectors(pb, center)
        .applyAxisAngle(new THREE.Vector3(0, 1, 0), omega * dt)
        .add(center);
    pb.copy(tmp);

    // normalize ...
    //tmp.subVectors (pb,pa).normalize().multiplyScalar(l);
    //pb.addVectors(tmp,pa);
    
    tire2.position.set(pa.x, 21, pa.z);
    tire.position.set(pb.x, 21, pb.z);

    tire.rotation.order = 'XYZ';
    tire2.rotation.order = 'XYZ';

    tire.rotation.z -= sb*dt/15;
    tire2.rotation.z -= sa*dt/15;
}

function myclamp(x, lo, hi) {
    return (x < lo) ? lo : ((x > hi) ? hi : x);
}

function driveAnimate()
{
	speed = gcontrols.speed+1;

	if (power)
	{
		sb += speed;
		sa += speed;
	} 
    if (brake)
    {
    	sb -= speed;
    	sa -= speed;
    } 
    if (turnLeft)
    {
    	sb += speed;
    	sa -= speed;
    } 
    if (turnRight)
    {
    	sa += speed;
    	sb -= speed;
    } 

    sa *= 0.95;
    sb *= 0.95;

    sa = myclamp(sa, -40 * speed, 40 * speed);
    sb = myclamp(sb, -40 * speed, 40 * speed);

    var tmp = new THREE.Vector3();
    tmp.copy(pa);
    tmp.add(pb).multiplyScalar(0.5); // (pa+pb)/2
    body.position.set (tmp.x, 16, tmp.z);
    tmp.copy(pa);
    tmp.sub(pb); // pa - pb;
    var angle = Math.atan2(-tmp.z, tmp.x) - Math.PI / 2;

    body.rotation.y = angle;
    tire.rotation.y = angle;
    tire2.rotation.y = angle;
}