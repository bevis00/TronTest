
function buildPlanes() {

  var material = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    visible:false
  });

  var plane = new THREE.Mesh(new THREE.PlaneGeometry(150, 150, 32, 32), material);
  
  return plane;

}

function buildTank() {

  var tank = new THREE.Object3D();
  var body = new THREE.Mesh(new THREE.BoxGeometry(20, 3, 10), new THREE.MeshBasicMaterial({
    color: 0x005121
  }));

  body.position.y = 1.5;
  tank.add(body);

  return tank;

}

function buildTarget(){

  var target = new THREE.Mesh(new THREE.CylinderGeometry(3,3,1.5,35),new THREE.MeshBasicMaterial({
    color: 0xf7ffaa}));

  return target;

}

function buildBrick() {

  var materialArray = [];
  var texture = new THREE.TextureLoader();
  texture.setCrossOrigin('');

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/cHr0Wrf.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/cHr0Wrf.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/6NrElLW.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( {side: THREE.BackSide}));

  var material = new THREE.MeshFaceMaterial(materialArray);


  var brick = new THREE.Mesh(new THREE.BoxGeometry(10, 6, 7), material);

  return brick;

}

function buildBrick2() {

  var materialArray = [];
  var texture = new THREE.TextureLoader();
  texture.setCrossOrigin('');

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/t91Rytt.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/1kTTQZp.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/1kTTQZp.jpg') }));

  materialArray.push(new THREE.MeshLambertMaterial( { map: texture.load ('https://i.imgur.com/ngyedRi.jpg') }));
  materialArray.push(new THREE.MeshLambertMaterial( {side: THREE.BackSide}));

  var material = new THREE.MeshFaceMaterial(materialArray);

  var brick = new THREE.Mesh(new THREE.BoxGeometry(5, 6, 7), material);

  return brick;

}

function buildBigBall() {

  var ball= new THREE.Mesh(new THREE.SphereGeometry(40,32,32),new THREE.MeshLambertMaterial({
    transparent:true,
    opacity:0.7}));
  ball.name="Breakout";
  scene.add(ball);
  pickables.push(ball);

}

function buildLight() {

  var pointLight1 = new THREE.PointLight( 0xffffff, 1, 150 );
	pointLight1.position.set( -37.5, 37.5, -37.5 );
	scene.add( pointLight1 );

  var pointLight2 = new THREE.PointLight( 0xffffff, 1, 150 );
	pointLight2.position.set( -37.5, 37.5, 37.5 );
	scene.add( pointLight2 );

  var pointLight3 = new THREE.PointLight( 0xffffff, 1, 150 );
	pointLight3.position.set( 37.5, -37.5, -37.5 );
	scene.add( pointLight3 );

  var pointLight4 = new THREE.PointLight( 0xffffff, 1, 150 );
	pointLight4.position.set( 37.5, -37.5, 37.5 );
	scene.add( pointLight4 );

  var pointLightMid = new THREE.PointLight (0xffffff, 1, 150);
  pointLightMid.position.set(0,0,0);
  pointLightMid.castShadow = true;
  pointLightMid.shadow.camera.left = -80;
  pointLightMid.shadow.camera.top = -80;
  pointLightMid.shadow.camera.right = 80;
  pointLightMid.shadow.camera.bottom = 80;
  pointLightMid.shadow.camera.near = 1;
  pointLightMid.shadow.camera.far = 1000;
  pointLightMid.shadow.mapSize.width = pointLightMid.shadow.mapSize.height = 1024;
  scene.add(pointLightMid);
  pointLightMid.shadow.bias = -.0001

}

function buildWall(){

  brick1 = buildBrick();
  brick2 = buildBrick2();

  for(var i = 0; i < 362; i++)
    wallPx[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallPx[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallPx[i].rotation.y = -Math.PI / 2;
    wallPx[i].name = "wallPx";

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallPx[count].position.set(78.5, 72 - i * 12, -65 + j * 10);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallPx[count].position.set(78.5, 66 - i * 12, -70 + j * 10);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallPx[count].position.set(78.5, 72 - i * 12, -72.5 + j * 145);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallNx[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallNx[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallNx[i].rotation.y = Math.PI / 2;
    wallNx[i].name = "wallNx";
    wallNx[i].material.color = new THREE.Color(0x8749b7);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallNx[count].position.set(-78.5, 72 - i * 12, 65 - j * 10);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallNx[count].position.set(-78.5, 66 - i * 12, 70 - j * 10);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallNx[count].position.set(-78.5, 72 - i * 12, 72.5 - j * 145);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallPy[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallPy[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallPy[i].rotation.x = Math.PI / 2;
    wallPy[i].name = "wallPy";
    wallPy[i].material.color = new THREE.Color(0x408449);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallPy[count].position.set(-65 + j * 10, 78.5, 72 - i * 12);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallPy[count].position.set(-70 + j * 10, 78.5, 66 - i * 12);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallPy[count].position.set(-72.5 + j * 145, 78.5, 72 - i * 12);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallNy[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallNy[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallNy[i].rotation.x = -Math.PI / 2;
    wallNy[i].name = "wallNy";
    wallNy[i].material.color = new THREE.Color(0xb78549);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallNy[count].position.set(-65 + j * 10, -78.5, -72 + i * 12);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallNy[count].position.set(-70 + j * 10, -78.5, -66 + i * 12);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallNy[count].position.set(-72.5 + j * 145, -78.5, -72 + i * 12);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallPz[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallPz[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallPz[i].rotation.y = Math.PI;
    wallPz[i].name = "wallPz";
    wallPz[i].material.color = new THREE.Color(0xa1b749);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallPz[count].position.set(65 - j * 10, 72 - i * 12, 78.5);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallPz[count].position.set(70 - j * 10, 66 - i * 12, 78.5);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallPz[count].position.set(72.5 - j * 145, 72 - i * 12, 78.5);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for(var i = 0; i < 362; i++)
    wallNz[i] = brick1.clone();

  for(var i = 362; i < 388; i++)
    wallNz[i] = brick2.clone();

  for (var i = 0; i < 388; i++) {

    wallNz[i].name = "wallNz";
    wallNz[i].material.color = new THREE.Color(0x4949b7);

  }

  var count = 0;

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 14; j++, count++) {

      wallNz[count].position.set(-65 + j * 10, 72 - i * 12, -78.5);

    }

  }

  for (var i = 0; i < 12; i++) {

    for (var j = 0; j < 15; j++, count++) {

      wallNz[count].position.set(-70 + j * 10, 66 - i * 12, -78.5);

    }

  }

  for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 2; j++, count++) {

      wallNz[count].position.set(-72.5 + j * 145, 72 - i * 12, -78.5);

    }

  }

  /////////////////////////////////////////////////////////////////////////////

  for (i = 0; i < wallPx.length; i++) {

    //pickables.push(wallPx[i], wallNx[i], wallPy[i], wallNy[i], wallPz[i], wallNz[i]);
    scene.add(wallPx[i], wallNx[i], wallPy[i], wallNy[i], wallPz[i], wallNz[i]);

  }

}
