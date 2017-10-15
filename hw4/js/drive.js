var drivePos = new THREE.Vector3 (0, 0, 0);
var driveVel = new THREE.Vector3 (0, 0, 0);
var driveAngle = 0;
var drivePower = 0;
var driveForce = new THREE.Vector3();

var speedL = 0, speedR = 0, rotSpeed = 0;
var speed = 1;

function driveAnimate()
{
	/*var tmp = driveVel.clone();
	tmp.multiplyScalar (dt);
	drivePos.add (tmp);

	tmp = driveForce.clone();
	tmp.multiplyScalar (dt);
	driveVel.add (tmp);*/

	/*if (driveVel.length() > 0)
	{
		driveAngle = Math.atan2 (-driveVel.z, driveVel.x);
	}*/

	var force = new THREE.Vector3 (1, 0, 0);

	driveAngle += rotSpeed * dt;
	force.multiplyScalar (dt*drivePower).applyAxisAngle (
		new THREE.Vector3(0,1,0), driveAngle);
	drivePos.add (force);

	body.position.set (drivePos.x, 16, drivePos.z);
}

function driveUpdate()
{
	/*if (power)
	{
		drivePower *= 1.2;
		if (drivePower < 3)
			drivePower = 3;
	}
	if (brake)
	{
		drivePower /= 1.2;
	}*/

	//var tmp = driveAngle;
	if (turnLeft)
	{
		//tmp += 0.1;

		speedL += 0.5;

		//tire.rotation.z -= 10*dt/35*sign;
    	//tire2.rotation.z += 10*dt/35*sign;
	}
	if (turnRight)
	{
		//tmp -= 0.1;

		speedR += 0.5;

		//tire.rotation.z += 10*dt/35*sign;
    	//tire2.rotation.z -= 10*dt/35*sign;
	}

	/*if (drivePower > 40)
		drivePower = 40;
	if (drivePower < 0)
		drivePower = 0;*/

	speedL *= 0.95;
	speedR *= 0.95;

	if (speedL > 40)
		speedL = 40;
	if (speedL < 0)
		speedL = 0;
	if (speedR > 40)
		speedR = 40;
	if (speedR < 0)
		speedR = 0;

	speed = gcontrols.speed;
	drivePower = (speedL+speedR)/2 * speed * 6;
	rotSpeed = (speedL-speedR)/ (10/speed);

	/*var force = new THREE.Vector3 (1, 0, 0);
	force.applyAxisAngle (new THREE.Vector3(0, 1, 0), driveAngle);
	force.multiplyScalar (drivePower);

	force_damp = driveVel.clone();
	force_damp.multiplyScalar (-2);

	driveForce.addVectors (force, force_damp);*/
}